# [使用powershell远程管理windows服务器](https://github.com/shyn/shyn.github.io/issues/13)

主要使用的是PowerShell Remoting 的功能，需要两台主机都安装有PowerShell。

## 功能启用

这个在 Windows Server 2012 R2 之后都是默认启用的。Windows 10上需要手动开启，管理员权限运行`Enable-PSRemoting -Force`

## WinRM

Windows Server的PowerShell Remotiong默认使用的是 WinRM 协议。这个协议基于一个开放标准Web Services for Management（简称 WS-Management）。Windows添加这个支持还蛮早，08年提出的，XP都支持。除了Windows，好像没什么人使用这个标准了，毕竟这个是面向Web服务的，而Web服务可以选择的太多了。后面如果说WSMan其实就是WinRM。微软还弄了个Linux上的WSMan，叫作 [Open Management Infrastructure](https://github.com/Microsoft/omi)但是看起来已经弃坑了，所以可以认为这项技术是Windows Only了。

WinRM 是基于HTTP或HTTPS的SOAP协议，标准端口是80和443，但是Windows7之后都默认使用5985和5986。

有些PowerShell命令有个ComputerName的参数，可以让命令在远程主机上执行，这些命令使用的是RPC协议。它们和PowerShell Remoting是不同的。这些命令可以使用一下命令查看
```pwsh
Get-Command | Where-Object {
     $_.Parameters.Keys -contains "ComputerName" -and
     $_.Parameters.Keys -notcontains "Session"
}
```

## OpenSSH

微软在18年fork了OpenSSH，18年底后的Windows版本（包括Windows Server）都内置了openssh的客户端，但是服务端需要额外启用。PowerShell Remoting 可以使用 ssh 协议连接，这样就跨平台了，比如在macOS或者Linux中来远程Windows服务器。当然如果开启了ssh server，我们也可以直接 ssh 到远程主机了！并不一定需要使用PowerShell的远程功能。

## 认证

如果使用主机名来连接，默认使用的是 Kerberos 协议，这个是双向认证的，即也会检查服务器是否可信。

如果使用的是IP或者连到工作组服务器，这个使用使用的是 NTLM。NTLM默认没有启用！所以要么在远程主机上设置SSL，要么在客户端设置信任主机。

## 信任主机

服务器往往没有配置SSL，NTLM协议无法验证服务器的身份，为了安全，需要在发起端信任远程主机，运行
```powershell
Set-Item wsman:\localhost\client\trustedhosts *
Restart-Service WinRM
```
上面使用了通配符，任何服务器都会信任。

## 服务器WinRM设置

Windows Server 上默认启动了winrm服务（Get-Service winrm），但是有服务不一定能工作，需要有listener，也就是能处理WSMan协议报文的服务。

查看当前的监听服务（listener）
```cmd
winrm enumerate winrm/config/listener
```
查看配置
```cmd
winrm get winrm/config
```
快速配置
```cmd
winrm quickconfig
```

## 测试连接
```pwsh
Test-WsMan Server-COMPUTER
```

## 临时远程运行命令

```pwsh
Invoke-Command -ComputerName Server01,Server02 -ScriptBlock { COMMAND } -credential USERNAME
```

## 开启远程会话，持续运行命令

```pwsh
Enter-PSSession -ComputerName COMPUTER -Credential USER
```

## 创建一个持久的连接
```pwsh
$s = New-PSSession -ComputerName Server01, Server02

Invoke-Command -Session $s { powershell-command-run-on-remote }
```

## 传输文件

利用持久连接，可以使用Copy-Item向或者从远程主机拷贝文件！最大的痛点解决了！
```pwsh
$Session = New-PSSession -ComputerName "Server01" -Credential "Contoso\User01"

Copy-Item "D:\Folder001\test.log" -Destination "C:\Folder001_Copy\" -ToSession $Session


Copy-Item "C:\MyRemoteData\scripts" -Destination "D:\MyLocalData\" -FromSession $Session

```

## 其他设置

如果遇到以下错误：
	Enter-PSSession: Connecting to remote server x.x.x.x failed with the following error message : WinRM 客户端无法处理该请求。如果身份验证方案与 Kerberos 不同，或者客户端计算机未加入到域中， 则必须使用 HTTPS 传输或者必须将目标计算机添加到 TrustedHosts 配置设置。 使用 winrm.cmd 配置 TrustedHosts。请注意，TrustedHosts 列表中的计算机可能未经过身份验证。 通过运行以下命令可获得有关此内容的更多信息: winrm help config。 For more information, see the about_Remote_Troubleshooting Help topic.

使用`winrm quickconfig -transport:https`转换传输协议，然后确保设置对信任主机即可。