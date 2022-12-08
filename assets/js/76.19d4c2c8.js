(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{390:function(_,v,t){"use strict";t.r(v);var a=t(13),l=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("架构")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("单体应用架构")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("横向扩展")]),_._v(" "),t("blockquote",[t("p",[_._v("增加服务器数量，使用nginx负载均衡分担服务器的压力")])])]),_._v(" "),t("li",[t("p",[_._v("纵向扩展")]),_._v(" "),t("blockquote",[t("p",[_._v("又称垂直扩展，增加服务器的性能，如增加CPU、内存等")])])])])]),_._v(" "),t("li",[t("p",[_._v("垂直应用架构")])]),_._v(" "),t("li",[t("p",[_._v("分布式架构")])]),_._v(" "),t("li",[t("p",[_._v("SOA架构")])]),_._v(" "),t("li",[t("p",[_._v("微服务架构")]),_._v(" "),t("ul",[t("li",[_._v("原子化拆分")])])])]),_._v(" "),t("h2",{attrs:{id:"微服务架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[_._v("#")]),_._v(" 微服务架构")]),_._v(" "),t("h3",{attrs:{id:"一、服务治理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、服务治理"}},[_._v("#")]),_._v(" 一、服务治理")]),_._v(" "),t("blockquote",[t("p",[_._v("服务治理就是进行服务的自动化管理，其核心服务的自动注册于发现")])]),_._v(" "),t("ol",[t("li",[_._v("服务注册： 服务实例将自身的服务注册到注册中心")]),_._v(" "),t("li",[_._v("服务发现： 服务实例通过注册中心获取注册其中服务的信息，通过这些信息请求他们提供的服务")]),_._v(" "),t("li",[_._v("服务剔除： 服务注册中心将出现问题的服务剔除到可用列表之外，使其不会被调用")])]),_._v(" "),t("h3",{attrs:{id:"二、服务调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、服务调用"}},[_._v("#")]),_._v(" 二、服务调用")]),_._v(" "),t("blockquote",[t("p",[_._v("在微服务框架中，通常存在多个服务之间的远程调用需求，目前主流的调用技术有基于HTTP的RESTful接口以及基于TCP的RPC协议")])]),_._v(" "),t("ol",[t("li",[t("p",[_._v("RESTful（Representational State Transfer ）")]),_._v(" "),t("blockquote",[t("p",[_._v("这是一种HTTP调用的格式，更标准，更通用，无论哪种语言都支持HTTP协议")])])]),_._v(" "),t("li",[t("p",[_._v("RPC（Remote Promote Call）")]),_._v(" "),t("blockquote",[t("p",[_._v("一种进程的通信方式，允许调用本地服务一样调用远程服务，RPC框架的主要目标就是让远程服务调用更简单、透明、RPC框架负责屏蔽底层的传输方式，序列化方式和通信细节，开发人员在使用的时候只需要了解谁在什么位置提供了什么杨德远程服务接口即可，并不需要关心底层通信细节的调用过程")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-1-区别与联系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-区别与联系"}},[_._v("#")]),_._v(" 2.1 区别与联系")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("比较项")]),_._v(" "),t("th",[_._v("RESTful")]),_._v(" "),t("th",[_._v("RPC")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("通信协议")]),_._v(" "),t("td",[_._v("HTTP")]),_._v(" "),t("td",[_._v("一般使用TCP")])]),_._v(" "),t("tr",[t("td",[_._v("性能")]),_._v(" "),t("td",[_._v("越低")]),_._v(" "),t("td",[_._v("较高")])]),_._v(" "),t("tr",[t("td",[_._v("灵活度")]),_._v(" "),t("td",[_._v("高")]),_._v(" "),t("td",[_._v("低")])]),_._v(" "),t("tr",[t("td",[_._v("应用")]),_._v(" "),t("td",[_._v("微服务架构")]),_._v(" "),t("td",[_._v("SOA架构")])])])]),_._v(" "),t("h3",{attrs:{id:"三、服务网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、服务网关"}},[_._v("#")]),_._v(" 三、服务网关")]),_._v(" "),t("p",[_._v("随着微服务的不断增多，不同的微服务一般会有不同的网络地址，而外部客户端可能需要调用多个\n服务的接口才能完成一个业务需求，如果让客户端直接与各个微服务通信可能出现：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("客户端需要调用不同的url地址，增加难度")])]),_._v(" "),t("li",[t("p",[_._v("在一定的场景下，存在跨域请求的问题")])]),_._v(" "),t("li",[t("p",[_._v("每个微服务都需要进行单独的身份认证")])])]),_._v(" "),t("p",[_._v("API网关直面意思是将所有API调用统一接入到API网关层，由网关层统一接入和输出。一个网关的\n基本功能有：统一接入、安全防护、协议适配、流量管控、长短链接支持、容错能力。有了网关之后，\n各个API服务提供团队可以专注于自己的的业务逻辑处理，而API网关更专注于安全、流量、路由等问题。")]),_._v(" "),t("h3",{attrs:{id:"四、服务容错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、服务容错"}},[_._v("#")]),_._v(" 四、服务容错")]),_._v(" "),t("p",[_._v("在微服务当中，一个请求经常会涉及到调用几个服务，如果其中某个服务不可用，没有做服务容错\n的话，极有可能会造成一连串的服务不可用，这就是雪崩效应。\n我们没法预防雪崩效应的发生，只能尽可能去做好容错。服务容错的三个核心思想是")]),_._v(" "),t("ul",[t("li",[_._v("不被外界环境影响")]),_._v(" "),t("li",[_._v("不被上游请求压垮")]),_._v(" "),t("li",[_._v("不被下游响应拖垮")])]),_._v(" "),t("h3",{attrs:{id:"五、链路追踪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、链路追踪"}},[_._v("#")]),_._v(" 五、链路追踪")]),_._v(" "),t("p",[_._v("随着微服务架构的流行，服务按照不同的维度进行拆分，一次请求往往需要涉及到多个服务。互联\n网应用构建在不同的软件模块集上，这些软件模块，有可能是由不同的团队开发、可能使用不同的编程\n语言来实现、有可能布在了几千台服务器，横跨多个不同的数据中心。因此，就需要对一次请求涉及的\n多个服务链路进行日志记录，性能监控即链路追踪")])])}),[],!1,null,null,null);v.default=l.exports}}]);