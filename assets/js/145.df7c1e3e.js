(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{476:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("aria2是一个轻量级的多协议多源命令行下载工具。它支持HTTP/HTTPS, FTP, SFTP, BitTorrent和Metalink。可以通过内置的JSON-RPC和XML-RPC接口操作aria2")]),t._v(" "),a("h3",{attrs:{id:"_1-安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装配置"}},[t._v("#")]),t._v(" [1]. 安装配置")]),t._v(" "),a("blockquote",[a("p",[t._v("环境 ubuntu 18.04， 镜像源自带有aria2，无需配置镜像源")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y  aria2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置环境")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/aria2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /root/download "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" /etc/aria2/aria2.session\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" /etc/aria2/aria2.conf\n")])])]),a("h3",{attrs:{id:"_2-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置文件"}},[t._v("#")]),t._v(" [2]. 配置文件")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://aria2c.com/usage.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("来自Aria2 & YAAW 使用说明"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## '#'开头为注释内容, 选项都有相应的注释说明, 根据需要修改 ##")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 被注释的选项填写的是默认值, 建议在需要修改时再取消注释  ##")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 文件保存相关 ##")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件的保存路径(可使用绝对路径或相对路径), 默认: 当前启动位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/download\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用磁盘缓存, 0为禁用缓存, 需1.16以上版本, 默认:16M")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#disk-cache=32M")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件预分配方式, 能有效降低磁盘碎片, 默认:prealloc")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 预分配所需时间: none < falloc ? trunc < prealloc")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# falloc和trunc则需要文件系统和内核支持")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NTFS建议使用falloc, EXT3/4建议trunc, MAC 下需要注释此项")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#file-allocation=none")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 断点续传")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("continue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 下载连接相关 ##")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大同时下载任务数, 运行时可修改, 默认:5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#max-concurrent-downloads=5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同一服务器连接数, 添加时可指定, 默认:1")]),t._v("\nmax-connection-per-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最小文件分片大小, 添加时可指定, 取值范围1M -1024M, 默认:20M")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假定size=10M, 文件为20MiB 则使用两个来源下载; 文件为15MiB 则使用一个来源下载")]),t._v("\nmin-split-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("10M\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个任务最大线程数, 添加时可指定, 默认:5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#split=5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 整体下载速度限制, 运行时可修改, 默认:0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#max-overall-download-limit=0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个任务下载速度限制, 默认:0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#max-download-limit=0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 整体上传速度限制, 运行时可修改, 默认:0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#max-overall-upload-limit=0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个任务上传速度限制, 默认:0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#max-upload-limit=0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁用IPv6, 默认:false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#disable-ipv6=true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接超时时间, 默认:60")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#timeout=60")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大重试次数, 设置为0表示不限制重试次数, 默认:5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#max-tries=5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置重试等待的秒数, 默认:0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#retry-wait=0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 进度保存相关 ##")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从会话文件中读取下载任务")]),t._v("\ninput-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/aria2/aria2.session\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在Aria2退出时保存`错误/未完成`的下载任务到会话文件")]),t._v("\nsave-session"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/aria2/aria2.session\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定时保存会话, 0为退出时才保存, 需1.16.1以上版本, 默认:0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#save-session-interval=60")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## RPC相关设置 ##")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用RPC, 默认:false")]),t._v("\nenable-rpc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许所有来源, 默认:false")]),t._v("\nrpc-allow-origin-all"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许非外部访问, 默认:false")]),t._v("\nrpc-listen-all"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 事件轮询方式, 取值:[epoll, kqueue, port, poll, select], 不同系统默认值不同")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#event-poll=select")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RPC监听端口, 端口被占用时可以修改, 默认:6800")]),t._v("\nrpc-listen-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6800")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置的RPC授权令牌, v1.18.4新增功能, 取代 --rpc-user 和 --rpc-passwd 选项")]),t._v("\nrpc-secret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("656CjCKQ0iQUB78eXgIe4TJz8V8i7OdV\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置的RPC访问用户名, 此选项新版已废弃, 建议改用 --rpc-secret 选项")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rpc-user=<USER>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置的RPC访问密码, 此选项新版已废弃, 建议改用 --rpc-secret 选项")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rpc-passwd=<PASSWD>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否启用 RPC 服务的 SSL/TLS 加密,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用加密后 RPC 服务需要使用 https 或者 wss 协议连接")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rpc-secure=true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 RPC 服务中启用 SSL/TLS 加密时的证书文件,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 PEM 格式时，您必须通过 --rpc-private-key 指定私钥")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rpc-certificate=/path/to/certificate.pem")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 RPC 服务中启用 SSL/TLS 加密时的私钥文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rpc-private-key=/path/to/certificate.key")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## BT/PT下载相关 ##")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当下载的是一个种子(以.torrent结尾)时, 自动开始BT任务, 默认:true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#follow-torrent=true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# BT监听端口, 当端口被屏蔽时使用, 默认:6881-6999")]),t._v("\nlisten-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("51413")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个种子最大连接数, 默认:55")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#bt-max-peers=55")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开DHT功能, PT需要禁用, 默认:true")]),t._v("\nenable-dht"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开IPv6 DHT功能, PT需要禁用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#enable-dht6=false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DHT网络监听端口, 默认:6881-6999")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#dht-listen-port=6881-6999")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地节点查找, PT需要禁用, 默认:false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#bt-enable-lpd=false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 种子交换, PT需要禁用, 默认:true")]),t._v("\nenable-peer-exchange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个种子限速, 对少种的PT很有用, 默认:50K")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#bt-request-peer-speed-limit=50K")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 客户端伪装, PT需要")]),t._v("\npeer-id-prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-TR2770-\nuser-agent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Transmission/2.77\npeer-agent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Transmission/2.77\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当种子的分享率达到这个数时, 自动停止做种, 0为一直做种, 默认:1.0")]),t._v("\nseed-ratio"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制保存会话, 即使任务已经完成, 默认:false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 较新的版本开启后会在任务完成后依然保留.aria2文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#force-save=false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# BT校验相关, 默认:true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#bt-hash-check-seed=true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 继续之前的BT任务时, 无需再次校验, 默认:false")]),t._v("\nbt-seed-unverified"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存磁力链接元数据为种子文件(.torrent文件), 默认:false")]),t._v("\nbt-save-metadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),a("h3",{attrs:{id:"_3-测试启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试启动"}},[t._v("#")]),t._v(" [3]. 测试启动")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 无报错即启动成功")]),t._v("\n aria2c --conf-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/aria2/aria2.conf \n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chrome浏览器下载AriaNG远程连接")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Aria2 RPC密钥: 配置文件中rpc-secre")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-自启脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-自启脚本"}},[t._v("#")]),t._v(" [4]. 自启脚本")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim /etc/systemd/system/aria2.service")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aria2 Server\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network.target\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WorkingDirectory")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/download\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/aria2c --conf-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/aria2/aria2.conf\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KillMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("process\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on-failure\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RestartSec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("30s\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target                               \n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);