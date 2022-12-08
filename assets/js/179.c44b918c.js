(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{519:function(e,t,r){"use strict";r.r(t);var s=r(13),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"process-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#process-request"}},[e._v("#")]),e._v(" process_request")]),e._v(" "),r("p",[e._v("在request对象传入downloader的过程中和将下载结果返回给engine过程中调用")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("返回值")]),e._v(" "),r("th",[e._v("行为")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("None")]),e._v(" "),r("td",[e._v("一切正常， 继续执行其他中间件链")])]),e._v(" "),r("tr",[r("td",[e._v("Response")]),e._v(" "),r("td",[e._v("停止调用其他process_request和process_exception， 也不再继续下载该请求， 然后走调用process_response的流程")])]),e._v(" "),r("tr",[r("td",[e._v("Request")]),e._v(" "),r("td",[e._v("不在继续调用其他process_request函数，直接返回引擎")])]),e._v(" "),r("tr",[r("td",[e._v("IgnoreRequest")]),e._v(" "),r("td",[e._v("process_exception函数会被调用， 如果没有此方法request_errback会被调用， 如果没有request_errback也没有， 此异常会被忽略， 日志也没有")])])])]),e._v(" "),r("h2",{attrs:{id:"process-response"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#process-response"}},[e._v("#")]),e._v(" process_response")]),e._v(" "),r("p",[e._v("将下载结果返回给engine的过程中被调用")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("返回值")]),e._v(" "),r("th",[e._v("行为")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Response")]),e._v(" "),r("td",[e._v("继续调用其他中间件的process_response")])]),e._v(" "),r("tr",[r("td",[e._v("Request")]),e._v(" "),r("td",[e._v("不再继续调用其他process_request函数，直接返回引擎")])]),e._v(" "),r("tr",[r("td",[e._v("IgnoreRequest")]),e._v(" "),r("td",[e._v("request_errback会被调用， 如果没有request_errback也没有， 此异常会被忽略， 日志也没有")])])])]),e._v(" "),r("h2",{attrs:{id:"process-exception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#process-exception"}},[e._v("#")]),e._v(" process_exception")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("返回值")]),e._v(" "),r("th",[e._v("行为")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Response")]),e._v(" "),r("td",[e._v("开始中间件的process_response处理流程")])]),e._v(" "),r("tr",[r("td",[e._v("Request")]),e._v(" "),r("td",[e._v("不在继续调用其他process_request函数，直接返回引擎")])]),e._v(" "),r("tr",[r("td",[e._v("None")]),e._v(" "),r("td",[e._v("继续调用其他中间件里的process_exception函数")])])])]),e._v(" "),r("h2",{attrs:{id:"内置中间件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内置中间件"}},[e._v("#")]),e._v(" 内置中间件")]),e._v(" "),r("p",[e._v("请求robots.txt文件，并解析其中的规则。")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware")])]),e._v(" "),r("p",[e._v("执行带Basic-auth验证的请求")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.httpauth.HttpAuthMiddleware")])]),e._v(" "),r("p",[e._v("下载请求超时最大时长")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.downloadtimeout.DownloadTimeoutMiddleware")])]),e._v(" "),r("p",[e._v("设置默认的请求头信息")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.defaultheaders.DefaultHeadersMiddleware")])]),e._v(" "),r("p",[e._v("设置请求头信息里的User-Agent")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.useragent.UserAgentMiddleware")])]),e._v(" "),r("p",[e._v("如果下载失败，是否重试，重试几次")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.retry.RetryMiddleware")])]),e._v(" "),r("p",[e._v("实现Meta标签重定向")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.redirect.MetaRefreshMiddleware")])]),e._v(" "),r("p",[e._v("实现压缩内容的解析（比如gzip）")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware")])]),e._v(" "),r("p",[e._v("实现30x的HTTP code的重定向")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.redirect.RedirectMiddleware")])]),e._v(" "),r("p",[e._v("实现对cookies的设置管理")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.cookies.CookiesMiddleware")])]),e._v(" "),r("p",[e._v("实现IP代理")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware")])]),e._v(" "),r("p",[e._v("下载信息的统计")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.stats.DownloaderStats")])]),e._v(" "),r("p",[e._v("下载结果的缓存")]),e._v(" "),r("blockquote",[r("p",[e._v("scrapy.downloadermiddlewares.httpcache.HttpCacheMiddleware")])]),e._v(" "),r("h2",{attrs:{id:"参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/returnes/p/10450773.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("定义实现随机User-Agent的下载中间件"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);