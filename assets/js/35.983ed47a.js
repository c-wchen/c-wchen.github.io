(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{261:function(v,_,t){v.exports=t.p+"assets/img/image-20201117105059655.b8e0ddc7.png"},388:function(v,_,t){"use strict";t.r(_);var s=t(13),n=Object(s.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("p",[v._v("在分布式系统中,由于网络原因或自身的原因,服务一般无法保证 100% 可用。如果一个服务出现了问题，调用这个服务就会出现线程阻塞的情况，此时若有大量的请求涌入，就会出现多条线程阻塞等 待，进而导致服务瘫痪。")]),v._v(" "),s("p",[v._v("服务与服务之间的依赖性，其中某个服务的问题造成整个服务故障的“雪崩效应”")]),v._v(" "),s("h2",{attrs:{id:"产生原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产生原因"}},[v._v("#")]),v._v(" 产生原因")]),v._v(" "),s("p",[s("img",{attrs:{src:t(261),alt:"image-20201117105059655"}})]),v._v(" "),s("p",[v._v("雪崩发生的原因多种多样，有不合理的"),s("strong",[v._v("容量设计")]),v._v("，或者是高并发下某一个方法"),s("strong",[v._v("响应变慢")]),v._v("，亦或是某\n台机器的"),s("strong",[v._v("资源耗尽")]),v._v("。我们无法完全杜绝雪崩源头的发生，只有做好足够的容错，保证在一个服务发生问\n题，不会影响到其它服务的正常运行。也就是＂雪落而不雪崩＂")]),v._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[v._v("#")]),v._v(" 解决方案")]),v._v(" "),s("ol",[s("li",[s("p",[v._v("隔离")]),v._v(" "),s("p",[v._v("指将系统按照一定的原则划分为若干个服务模块，各个模块之间相对独立，无强依赖。当有故\n障发生时，能将问题和影响隔离在某个模块内部，而不扩散风险，不波及其它模块，不影响整体的\n系统服务。常见的隔离方式有："),s("strong",[v._v("线程池隔离")]),v._v("和"),s("strong",[v._v("信号量隔离")]),v._v("．")])]),v._v(" "),s("li",[s("p",[v._v("超时")]),v._v(" "),s("p",[v._v("在上游服务调用下游服务的时候，设置一个最大响应时间，如果超过这个时间，下游未作出反应，\n就断开请求，释放掉线程。")])]),v._v(" "),s("li",[s("p",[v._v("限流")]),v._v(" "),s("p",[v._v("流就是限制系统的输入和输出流量已达到保护系统的目的。为了保证系统的稳固运行,一旦达到\n的需要限制的阈值,就需要限制流量并采取少量措施以完成限制流量的目的。")])]),v._v(" "),s("li",[s("p",[v._v("熔断")]),v._v(" "),s("p",[v._v("在互联网系统中，当下游服务因访问压力过大而响应变慢或失败，上游服务为了保护系统整\n体的可用性，可以暂时切断对下游服务的调用。这种牺牲局部，保全整体的措施就叫做熔断")]),v._v(" "),s("p",[v._v("状态： 熔断关闭、熔断开启、半熔断状态")])]),v._v(" "),s("li",[s("p",[v._v("降级")]),v._v(" "),s("p",[v._v("降级其实就是为服务提供一个托底方案，一旦服务无法正常调用，就使用托底方案")])])])])}),[],!1,null,null,null);_.default=n.exports}}]);