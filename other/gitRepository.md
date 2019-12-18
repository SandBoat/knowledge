# mac 局域网仓库搭建

## 搭建裸仓库
`git init --bare`

裸仓库仅仅保存代码历史，代码并不保存在裸仓库中。所以本地操作时，可以看到它只包含一个.git文件夹，并且你push文件进去，他还是一个文件夹……
一般版本库，除了.git的配置文件夹，也包含了所有代码，作为master（例）分支存在。

## 本地提交代码

```bash
# 修改文件
git add .
git commit -m 'init'
```

## 远程提交代码

```bash
git clone ssh://[主机名]@[主机IP]/~/[PATH]
#  例如：git clone ssh://mtmac@10.1.205.231/~/mt/hand/yili/share/front/.git
# 修改文件
git add .
git commit -m 'init'
git push origin master
```

## 遇到的问题

- fatal: '~/mt/hand/yili' does not appear to be a git repository

  PATH 地址有问题

- ssh: connect to host 192.168.1.102 port 22: Connection refused

  需要打开远程登录权限





