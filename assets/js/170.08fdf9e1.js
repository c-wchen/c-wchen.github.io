(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{509:function(t,n,r){"use strict";r.r(n);var a=r(13),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"基本概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),r("p",[t._v("**URI：**HTTP使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。URL是一种特殊类型的URI，包含了用于查找某个资源的足够的信息")]),t._v(" "),r("p",[t._v("**URL:**URL,全称是UniformResourceLocator, 中文叫统一资源定位符,是互联网上用来标识某一处资源的地址。以下面这个URL为例，介绍下普通URL的各部分组成")]),t._v(" "),r("blockquote",[r("p",[t._v("http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name")])]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("协议部分")])]),t._v(" "),r("p",[t._v('该URL的协议部分为“http：”，这代表网页使用的是HTTP协议。在Internet中可以使用多种协议，如HTTP，FTP等等本例中使用的是HTTP协议。在"HTTP"后面的“//”为分隔符')])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("域名部分")])]),t._v(" "),r("p",[t._v("该URL的域名部分为“"),r("a",{attrs:{href:"https://link.jianshu.com?t=http://www.aspxfans.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.aspxfans.com"),r("OutboundLink")],1),t._v("”。一个URL中，也可以使用IP地址作为域名使用")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("端口部分")])]),t._v(" "),r("p",[t._v("跟在域名后面的是端口，域名和端口之间使用“:”作为分隔符。端口不是一个URL必须的部分，如果省略端口部分，将采用默认端口")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("虚拟目录部分")])]),t._v(" "),r("p",[t._v("从域名后的第一个“/”开始到最后一个“/”为止，是虚拟目录部分。虚拟目录也不是一个URL必须的部分。本例中的虚拟目录是“/news/”")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("文件名部分")])]),t._v(" "),r("p",[t._v("从域名后的最后一个“/”开始到“？”为止，是文件名部分，如果没有“?”,则是从域名后的最后一个“/”开始到“#”为止，是文件部分，如果没有“？”和“#”，那么从域名后的最后一个“/”开始到结束，都是文件名部分。本例中的文件名是“index.asp”。文件名部分也不是一个URL必须的部分，如果省略该部分，则使用默认的文件名")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("锚部分")])]),t._v(" "),r("p",[t._v("从“#”开始到最后，都是锚部分。本例中的锚部分是“name”。锚部分也不是一个URL必须的部分")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("参数部分")])]),t._v(" "),r("p",[t._v("从“？”开始到“#”为止之间的部分为参数部分，又称搜索部分、查询部分。本例中的参数部分为“boardID=5&ID=24618&page=1”。参数可以允许有多个参数，参数与参数之间用“&”作为分隔符")])])]),t._v(" "),r("h3",{attrs:{id:"url和uri的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#url和uri的区别"}},[t._v("#")]),t._v(" URL和URI的区别")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("URI，是uniform resource identifier，统一资源标识符，用来唯一的标识一个资源。")])]),t._v(" "),r("p",[t._v("Web上可用的每种资源如HTML文档、图像、视频片段、程序等都是一个来URI来定位的\nURI一般由三部组成：\n①访问资源的命名机制\n②存放资源的主机名\n③资源自身的名称，由路径表示，着重强调于资源。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("URL是uniform resource locator，统一资源定位器，它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。")])]),t._v(" "),r("p",[t._v("URL是Internet上用来描述信息资源的字符串，主要用在各种WWW客户程序和服务器程序上，特别是著名的Mosaic。\n采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。URL一般由三部组成：\n①协议(或称为服务方式)\n②存有该资源的主机IP地址(有时也包括端口号)\n③主机资源的具体地址。如目录和文件名等")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("URN，uniform resource name，统一资源命名，是通过名字来标识资源，比如"),r("a",{attrs:{href:"https://link.jianshu.com?t=mailto:java-net@java.sun.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("mailto:java-net@java.sun.com"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("p",[t._v("URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。URL和URN都是一种URI。笼统地说，每个 URL 都是 URI，但不一定每个 URI 都是 URL。这是因为 URI 还包括一个子类，即统一资源名称 (URN)，它命名资源但不指定如何定位资源。上面的 mailto、news 和 isbn URI 都是 URN 的示例。")]),t._v(" "),r("p",[t._v("在Java的URI中，一个URI实例可以代表绝对的，也可以是相对的，只要它符合URI的语法规则。而URL类则不仅符合语义，还包含了定位该资源的信息，因此它不能是相对的。\n在Java类库中，URI类不包含任何访问资源的方法，它唯一的作用就是解析。\n相反的是，URL类可以打开一个到达资源的流。")])])]),t._v(" "),r("h3",{attrs:{id:"参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),r("p",[t._v("https://www.jianshu.com/p/80e25cb1d81a")])])}),[],!1,null,null,null);n.default=e.exports}}]);