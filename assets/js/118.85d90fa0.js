(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{445:function(a,s,t){"use strict";t.r(s);var n=t(13),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("spring表达式语言（简称SpEL, Spring Expression Language ）是一个支持运行时查询和操作对象的强大表达式语言，语法类似于EL， SpELS使用````#{...}```作为界定符， 所有在大括号的字符都被认为是SpEL， SpEL为bean的属性进行动态赋值提供了便利")]),a._v(" "),t("p",[a._v("SpEL可以实现")]),a._v(" "),t("ul",[t("li",[a._v("通过bean的id对bean进行引用")]),a._v(" "),t("li",[a._v("调用方法以及应用对象属性")]),a._v(" "),t("li",[a._v("计算表达式的值")]),a._v(" "),t("li",[a._v("正则表达式匹配")])]),a._v(" "),t("h3",{attrs:{id:"功能概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能概述"}},[a._v("#")]),a._v(" 功能概述")]),a._v(" "),t("ul",[t("li",[a._v("文字表达式")]),a._v(" "),t("li",[a._v("布尔和关系运算符")]),a._v(" "),t("li",[a._v("正则表达式")]),a._v(" "),t("li",[a._v("类表达式")]),a._v(" "),t("li",[a._v("访问 properties, arrays, lists, maps")]),a._v(" "),t("li",[a._v("方法调用")]),a._v(" "),t("li",[a._v("关系运算符")]),a._v(" "),t("li",[a._v("参数")]),a._v(" "),t("li",[a._v("调用构造函数")]),a._v(" "),t("li",[a._v("Bean引用")]),a._v(" "),t("li",[a._v("构造Array")]),a._v(" "),t("li",[a._v("内嵌lists")]),a._v(" "),t("li",[a._v("内嵌maps")]),a._v(" "),t("li",[a._v("三元运算符")]),a._v(" "),t("li",[a._v("变量")]),a._v(" "),t("li",[a._v("用户定义的函数")]),a._v(" "),t("li",[a._v("集合投影")]),a._v(" "),t("li",[a._v("集合筛选")]),a._v(" "),t("li",[a._v("模板表达式")])]),a._v(" "),t("h3",{attrs:{id:"spel基础表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spel基础表达式"}},[a._v("#")]),a._v(" SpEL基础表达式")]),a._v(" "),t("ul",[t("li",[a._v("字面值")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("浮点值\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{3.1415}")]),a._v("\n\n科学记数法 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("98,700")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{9.87E4}")]),a._v("\n\nString类型字面值\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{'HELLO'}")]),a._v("\n\n字Boolean类型\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{flase}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("引用bean")])]),a._v(" "),t("p",[a._v("SpEL所能做的另外一件基础的事情就是通过ID引用其他的bean。例如，你可以使用SpEL将一个bean装配到另外一个bean的属性中")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cat是bean "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{cat}")]),a._v("\n\n引用cat的name属性\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{cat.name}")]),a._v("\n\n调用cat的call方法\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{cat.call()}")]),a._v("\n\n调用cat方法\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{cat.getAlias().split(', ')}")]),a._v("\n\n如果cat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("的返回值是null的话，将会出现NullPointerException异常，使用类型安全的运算符\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{cat.getAlias()?.split(',')}")]),a._v("\n\n如果要在SpEL中访问类作用域的方法和常量的话，要依赖T"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("这个关键的运算符\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{T(java.lang.Math).PI}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{T(java.lang.Math).random()}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("SpEL运算符")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("将简单的表达式组合为更为复杂的表达式\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{T(java.lang.Math).PI  * circle.radius ^ 2}")]),a._v("\n\n")])])]),t("ul",[t("li",[a._v("比较运算符")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("表达式的计算结果是个Boolean值\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{counter.total == 100}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{counter.total eq 100}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("三元运算符")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('#{scoreboard.score > 1000 ? "winner" : "loser"}')]),a._v("\n")])])]),t("ul",[t("li",[a._v("正则表达式")])]),a._v(" "),t("p",[a._v("当处理文本时，有时检查文本是否匹配某种模式是非常有用的。SpEL通过matches运算符支持表达式中的模式匹配。 matches运算\n符对String类型的文本（作为左边参数）应用正则表达式（作为右边参数）。 matches的运算结果会返回一个Boolean类型的值：如果与\n正则表达式相匹配，则返回true；否则返回false")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("判断一个字符串是否包含有效的邮件地址\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{admin.email matches '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\\\\.com'}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("查询运算符（ .?[]）")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("用来对集合进行过滤，得到集合的一个子集\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#{jukebox.songs.?[artist eq 'Aerosmith']}    ")]),a._v("\n")])])]),t("p",[t("strong",[a._v("注意")]),a._v("： SpEL可以在bean、@value中使用")]),a._v(" "),t("ul",[t("li",[t("code",[a._v('<bean id="cat"><property name="call" ref="#{\'miao maio~~\'}"/></bean>')])]),a._v(" "),t("li",[t("code",[a._v("@Value(\"#{'miao maio~~'})")])])]),a._v(" "),t("h3",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),t("p",[a._v("https://kknews.cc/code/e6nrln4.html")])])}),[],!1,null,null,null);s.default=e.exports}}]);