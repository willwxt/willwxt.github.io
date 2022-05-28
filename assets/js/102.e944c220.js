(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{456:function(a,t,e){"use strict";e.r(t);var r=e(45),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"分布式相关备忘录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式相关备忘录"}},[a._v("#")]),a._v(" 分布式相关备忘录")]),a._v(" "),e("h4",{attrs:{id:"🎞🎞🎞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎞🎞🎞"}},[a._v("#")]),a._v(" 🎞🎞🎞")]),a._v(" "),e("h2",{attrs:{id:"cap理论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cap理论"}},[a._v("#")]),a._v(" CAP理论")]),a._v(" "),e("p",[a._v("CAP 理论指出对于一个分布式计算系统来说, 不可能同时满足以下三点")]),a._v(" "),e("ol",[e("li",[e("strong",[a._v("一致性")]),a._v(": 在分布式环境中, 一致性是指数据在多个副本之间是否能够保持一致的特性, 等同于所有节点访问同一份最新的数据副本。在一致性的需求下, 当一个系统在数据一致的状态下执行更新操作后, 应该保证系统的数据仍然处于一致的状态。")]),a._v(" "),e("li",[e("strong",[a._v("可用性")]),a._v(": 每次请求都能获取到正确的响应, 但是不一定保证获取的数据为最新数据。")]),a._v(" "),e("li",[e("strong",[a._v("分区容错性")]),a._v(": 分布式系统在遇到任何网络分区故障的时候, 仍然需要能够保证对外提供满足一致性和可用性的服务, 除非是整个网络环境都发生了故障。(分布式系统往往需要保证的性质)")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2020/09/cap-theorem-diagram.png",alt:"cap理论"}})]),a._v(" "),e("p",[a._v("各分布式中间件实现: euraka是AP, zookeeper是CP")]),a._v(" "),e("h2",{attrs:{id:"base-理论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-理论"}},[a._v("#")]),a._v(" BASE 理论")]),a._v(" "),e("p",[a._v("相对于ACID")]),a._v(" "),e("p",[a._v("BASE 是 Basically Available(基本可用)、Soft-state(软状态) 和 Eventually Consistent(最终一致性) 缩写。")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("基本可用")]),a._v(": 在分布式系统出现故障, 允许损失部分可用性 (服务降级、页面降级) 。")]),a._v(" "),e("li",[e("strong",[a._v("软状态")]),a._v(": 允许分布式系统出现中间状态, 且中间状态不影响系统的可用性。这里的中间状态是指不同的 data replication (数据备份节点) 之间的数据更新可以出现延时的最终一致性。")]),a._v(" "),e("li",[e("strong",[a._v("最终一致性")]),a._v(": data replications 经过一段时间达到一致性(通常经过消息传递)")])]),a._v(" "),e("h2",{attrs:{id:"共识算法-一致性协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共识算法-一致性协议"}},[a._v("#")]),a._v(" 共识算法/一致性协议")]),a._v(" "),e("p",[a._v("概述: 达成共识的机制, 在分布式系统中, 可以分为")]),a._v(" "),e("ul",[e("li",[a._v("崩溃容错协议crash fault tolerant,CFT")]),a._v(" "),e("li",[a._v("拜占庭容错协议Byzantine fault tolerant,BFT")])]),a._v(" "),e("h3",{attrs:{id:"paxos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paxos"}},[a._v("#")]),a._v(" Paxos")]),a._v(" "),e("h3",{attrs:{id:"zab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zab"}},[a._v("#")]),a._v(" ZAB")]),a._v(" "),e("h3",{attrs:{id:"raft"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raft"}},[a._v("#")]),a._v(" Raft")]),a._v(" "),e("p",[a._v("Raft是一种用于替代"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Paxos",target:"_blank",rel:"noopener noreferrer"}},[a._v("Paxos"),e("OutboundLink")],1),a._v("的"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%85%B1%E8%AD%98%E6%A9%9F%E5%88%B6",target:"_blank",rel:"noopener noreferrer"}},[a._v("共识"),e("OutboundLink")],1),a._v("算法。")]),a._v(" "),e("p",[a._v('名字来源于"Reliable, Replicated, Redundant, And Fault-Tolerant" (可靠、可复制、可冗余、可容错) 的缩写')]),a._v(" "),e("ul",[e("li",[a._v("比起Paxos, 算法本身能被更好地理解, 安全性更高, 提供一些额外的特性")]),a._v(" "),e("li",[a._v("在分布式系统之间部署有限状态机, 并提供通用方法, 以此来确保任意节点在某种状态转换上保持一致")]),a._v(" "),e("li",[a._v("集群内的节点都对选举出的领袖采取信任")])]),a._v(" "),e("p",[a._v("可视化演示: http://thesecretlivesofdata.com/raft/")]),a._v(" "),e("h4",{attrs:{id:"算法实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算法实现"}},[a._v("#")]),a._v(" 算法实现")]),a._v(" "),e("p",[a._v("Raft集群中有三种身份, 节点有机会在这些身份之间切换:")]),a._v(" "),e("ol",[e("li",[a._v("leader 领袖")]),a._v(" "),e("li",[a._v("follower 追随者")]),a._v(" "),e("li",[a._v("candidate 候选人")]),a._v(" "),e("li",[a._v("正常情况只会有一个leader, 其他都是follower")]),a._v(" "),e("li",[a._v("leader负责所有外部请求, 如一请求不是leader收到, 会被传导给leader")]),a._v(" "),e("li",[a._v("leader发送心跳, 让follower知道leader状态")]),a._v(" "),e("li",[a._v("follower设计超时机制, 超过一定时间没有收到心跳, 就会进入选举状态")])]),a._v(" "),e("p",[a._v("Raft将问题拆成数个子问题分开解决")]),a._v(" "),e("ol",[e("li",[a._v("领袖选举 Leader Election : 如何选举leader")]),a._v(" "),e("li",[a._v("记录复写 Log Replication : 如何保证所有节点的数据一致性")]),a._v(" "),e("li",[a._v("安全性 Safety")])]),a._v(" "),e("h4",{attrs:{id:"领袖选举-leader-election"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#领袖选举-leader-election"}},[a._v("#")]),a._v(" 领袖选举 Leader Election")]),a._v(" "),e("p",[a._v("概述: 简单版本")]),a._v(" "),e("ol",[e("li",[a._v("follower心跳超时则升级为candidate, 向其他节点发送拉票请求")]),a._v(" "),e("li",[a._v("其他节点只要收到请求就同意投票, 过半节点同意, candidate直接当选新leader")])]),a._v(" "),e("p",[a._v("细节:")]),a._v(" "),e("ol",[e("li",[e("strong",[a._v("任期term")]),a._v(":")])]),a._v(" "),e("ul",[e("li",[a._v("每次有candidate诞生都会开启新一轮任期选举term election")]),a._v(" "),e("li",[a._v("candidate会先给自己投一票")]),a._v(" "),e("li",[a._v("同个任期选举中一个节点只能投1票, 往往投给该任期的首个拉票请求")]),a._v(" "),e("li",[a._v("候选人收到其他候选人的拉票, 拉票任期不小于自己的任期, 自己会放弃竞选, 并反给对方投票")]),a._v(" "),e("li",[a._v("如果超时后还未选出新领袖, 此任期终止, 开始新任期")])]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("election timeout: follower多久升级为candidate (区间内的随机值)\n"),e("ol",[e("li",[a._v("只要收到拉票 / 心跳, 都会刷新这个超时(自旋)")])])]),a._v(" "),e("li",[a._v("任期选举冷却: 本轮任期选举中, 多个候选者平票, 这些候选者需要经过这个自旋后才能继续下一轮任期选举")]),a._v(" "),e("li",[a._v("Raft每个服务器的超时期限是随机的, 降低同时竞选的概率")])]),a._v(" "),e("h4",{attrs:{id:"记录复写-log-replication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记录复写-log-replication"}},[a._v("#")]),a._v(" 记录复写 Log Replication")]),a._v(" "),e("p",[a._v("更新数据的责任在leader上")]),a._v(" "),e("p",[a._v("简要流程:")]),a._v(" "),e("ol",[e("li",[a._v("leader接收到数据指令, 并做记录, 然后向所有节点发送信息")]),a._v(" "),e("li",[a._v("节点收到后也将数据做记录, 并返回确认")]),a._v(" "),e("li",[a._v("leader收到过半确认后, 才真正将数据修改, 给客户端响应操作成功")]),a._v(" "),e("li",[a._v("leader向所有节点发送确认修改信息")])]),a._v(" "),e("p",[a._v("细节:")]),a._v(" "),e("ol",[e("li",[a._v("其实这些信息是随着心跳一起发送的")])]),a._v(" "),e("h4",{attrs:{id:"分区容错性-partition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分区容错性-partition"}},[a._v("#")]),a._v(" 分区容错性 partition")]),a._v(" "),e("p",[a._v("如果出现了网络分区问题, 可能会形成多个leader集群:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("此假设情境下, 旧leader(D)和新leader(B)可以共存, 但新leader的term更高\n\t\tA\nB(L)\t\t\tC\n================== 网络中断\n \tD(L)\tE\n此时, 如果B集群收到请求, 如果AC正常, 是可以正常使用的(收到了足够多的返回确认)\n如果D集群收到请求, 因为没有足够的节点返回确认信息, 所以是不可用的\n### 至此避免了脑裂问题\n其次, 当网络分区问题修复后, 就会以term更高的作为leader, 并对数据进行同步\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("h3",{attrs:{id:"gossip协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gossip协议"}},[a._v("#")]),a._v(" Gossip协议")]),a._v(" "),e("p",[a._v("一个节点想要分享一些信息给网络中的其他的一些节点。于是，它"),e("strong",[a._v("周期性")]),a._v("的"),e("strong",[a._v("随机")]),a._v("选择一些节点，并把信息传递给这些节点。这些收到信息的节点接下来会做同样的事情，即把这些信息传递给其他一些随机选择的节点")]),a._v(" "),e("ul",[e("li",[a._v("无leader")]),a._v(" "),e("li",[a._v("不支持拜占庭问题")])]),a._v(" "),e("p",[e("a",{attrs:{href:"https://tech.meituan.com/2017/04/21/mt-leaf.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("美团分布式id leaf"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"akf拆分原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#akf拆分原则"}},[a._v("#")]),a._v(" AKF拆分原则")]),a._v(" "),e("ul",[e("li",[a._v("x轴:全量镜像,读写分离")]),a._v(" "),e("li",[a._v("y轴:根据业务/功能拆分,数据分开存储")]),a._v(" "),e("li",[a._v("z轴:基于规则拆分/逻辑拆分")])])])}),[],!1,null,null,null);t.default=v.exports}}]);