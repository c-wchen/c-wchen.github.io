(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{481:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"docker镜像下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像下载"}},[t._v("#")]),t._v(" docker镜像下载")]),t._v(" "),a("p",[t._v("docker pull gitlab/gitlab-ce")]),t._v(" "),a("h2",{attrs:{id:"安装部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[t._v("#")]),t._v(" 安装部署")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -d  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(":443 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),t._v(":22 --name gitlab --restart always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v /home/gitlab/config:/etc/gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v /home/gitlab/logs:/var/log/gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v /home/gitlab/data:/var/opt/gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\ngitlab/gitlab-ce\n")])])]),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /home/gitlab/config/gitlab.rb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置http协议所使用的访问地址,不加端口号默认为80")]),t._v("\nexternal_url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://192.168.199.231'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置ssh协议所使用的访问地址和端口")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab_ssh_host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.168.199.231'")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab_shell_ssh_port'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此端口是run时22端口映射的222端口")]),t._v("\n:wq "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#保存配置文件并退出")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" restart gitlab\n")])])]),a("h2",{attrs:{id:"默认root密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认root密码"}},[t._v("#")]),t._v(" 默认root密码")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it gitlab "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\ngitlab-rails console -e production\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" User.where"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".first\nuser.password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx'")]),t._v("\nuser.password_confirmation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v("\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" User.where"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".first\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);