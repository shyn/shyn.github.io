# [Postgres 自增ID不同步造成主键重复错误](https://github.com/shyn/shyn.github.io/issues/14)

postgresql 自增 ID 的不同步问题。觉得这个估计是个新手常见问题，开始使用的关键词不对，搜索不到有用结果，后来直接用主键报错就找到答案了。so还是你大爷啊。

https://stackoverflow.com/questions/4448340/postgresql-duplicate-key-violates-unique-constraint

简单来说就是，如果设置了自增ID，但是插入的时候直接指定了ID，就很可能导致了数据库内部的自增序列和表实际的最大ID不同步，导致插入新数据时（使用自增ID），出现主键重复的错误。

这里涉及一个问题：如果你完全不懂出现的问题真正的是什么，如果问出有效的问题，快速找到答案？

答案是：尽量使用原始出错信息，直接Google…… 这样简单直接有效。没有测试ChatGPT，估计直接贴错误，也能解答出来，毕竟爬了互联网来训练的。就是不知道，按自己的理解，可能没问到点子上时，她能不能像真正的人类专家一样，快速意会，给出正确解答。回头试试。