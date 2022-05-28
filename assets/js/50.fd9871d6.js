(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{403:function(s,a,t){"use strict";t.r(a);var e=t(45),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"keepalived"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keepalived"}},[s._v("#")]),s._v(" keepalived")]),s._v(" "),t("h4",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("h4",{attrs:{id:"lvs服务器可能挂掉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lvs服务器可能挂掉"}},[s._v("#")]),s._v(" LVS服务器可能挂掉")]),s._v(" "),t("blockquote",[t("p",[s._v("虽然服务没有下线但是用户无法访问")])]),s._v(" "),t("h4",{attrs:{id:"server服务器可能挂掉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server服务器可能挂掉"}},[s._v("#")]),s._v(" Server服务器可能挂掉")]),s._v(" "),t("blockquote",[t("p",[s._v("LVS还拥有其负载条目, 会造成一部分用户无法访问")])]),s._v(" "),t("h4",{attrs:{id:"单点故障的解决方式-一变多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单点故障的解决方式-一变多"}},[s._v("#")]),s._v(" 单点故障的解决方式 一变多")]),s._v(" "),t("blockquote",[t("p",[s._v("问题: VIP必须是唯一的")]),s._v(" "),t("p",[s._v("两个思路:  1. 主备 2. 主主")])]),s._v(" "),t("h4",{attrs:{id:"主备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主备"}},[s._v("#")]),s._v(" 主备")]),s._v(" "),t("p",[s._v("方向性")]),s._v(" "),t("p",[s._v("效率性")]),s._v(" "),t("h4",{attrs:{id:"keepalived-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keepalived-2"}},[s._v("#")]),s._v(" keepalived")]),s._v(" "),t("blockquote",[t("p",[s._v("代替人运维, 解决单点故障, 实现HA, 通用的工具")]),s._v(" "),t("ol",[t("li",[s._v("监控自己服务")]),s._v(" "),t("li",[s._v("Master通过自己还活着, Backup监听Master状态, Backup选举")]),s._v(" "),t("li",[s._v("配置")]),s._v(" "),t("li",[s._v("对后端server做健康检查")])]),s._v(" "),t("p",[s._v("Nginx也可以用keepalived保证HA")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" keepalived -y "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/keepalived/\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置文件夹 备份配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局配置 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vrrp虚拟路由冗余协议 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virtual_server虚拟服务{real_server} 多个")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主机贵 备机便宜")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器多个网卡")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保证id的对应")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 优先级")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virtual_ipaddress VIP IP漂移")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("man")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" keepalived.conf "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看5类帮助文件")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ./keepalived.conf root@node04:"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程拷贝")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" keepalived start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("blockquote",[t("p",[s._v("LVS 没有数据备份的问题, 主机恢复后可以作为Master")]),s._v(" "),t("p",[s._v("所有操作对用户来说都是透明的")])]),s._v(" "),t("h4",{attrs:{id:"问题-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题-2"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("blockquote",[t("p",[s._v("程序异常退出, 没有收回 VIP 和 LVS 配置 备机网卡也会出现 VIP")]),s._v(" "),t("p",[s._v("三次握手或四次挥手会负载到不同服务器, 发送的数据包会丢包")]),s._v(" "),t("p",[s._v("单兵作战")])])])}),[],!1,null,null,null);a.default=n.exports}}]);