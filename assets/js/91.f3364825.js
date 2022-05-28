(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{448:function(e,t,n){"use strict";n.r(t);var r=n(45),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("ol",[n("li",[e._v("synchronized\n锁对象(this,class对象...) 占用对象头的几位作为标识, 可重入")])]),e._v(" "),n("p",[e._v("旧jdk中只有一种重量级锁, jdk1.6开始JVM的优化\n锁升级(锁膨胀) 无锁-偏向锁-轻量级-重量级 首先进入偏向锁状态, 记录拥有锁的线程ID, 该线程自己调用没有问题, 有别的锁也没问题, 但如果出现线程争用(非本ID线程争用并且失败), 升级为自旋锁, 自旋10次后, 升级为向OS申请的重量级锁(未抢到锁的线程进入Monitor, 阻塞在_WaitSet队列中)")]),e._v(" "),n("p",[e._v("锁消除\tJIT编译消除不必要的锁")]),e._v(" "),n("p",[e._v("锁粗化\t扩大加锁代码块的范围, 避免反复加锁")]),e._v(" "),n("p",[e._v("自适应自旋锁\t自旋的次数由前一次在同一个锁上的自旋时间及锁的拥有者的状态来决定, 避免盲目自旋的问题")]),e._v(" "),n("p",[e._v("class字节码: ACC_SYNCHRONIZED关键字修饰方法 , 代码块使用命令monitorenter进入锁, monitorexit释放锁")]),e._v(" "),n("p",[e._v("CAS和OS锁的优劣, 加锁代码执行时间越长, 线程争用越多, CAS占用越多, 选OS锁则越好 (追求吞吐量, 同步方法执行时间长的场景)")]),e._v(" "),n("p",[e._v("对象头信息\t(对象信息还有实例数据和对齐填充, 此处省略)\n[\t\t\t\tmark word\t\t\t\t\t\t]\n锁状态\t54位\t2位 \t4位 \t\t是否偏向 \t锁标志位\n无锁\t对象的hashcode \t分代年龄 \t0 \t\t\t01\n偏向锁\t线程ID \tEpoch\t分代年龄 \t1\t\t\t01\n轻量级\t\t\t指向轻量级锁的指针\t\t\t\t00\n重量级\t\t\t指向重量级锁的指针\t\t\t\t10\nGC标记\t\t\t\t\tempty\t\t\t\t\t11")]),e._v(" "),n("p",[e._v("底层实现: 每个锁对应一个monitor(c++中的ObjectMonitor), 争用的线程进入 _EntryList, 得到的线程赋值给_Owner, 并且_count计数++\n执行完毕,或wait,将owner=null, count--,wait的线程进入_WaitSet等待被唤醒 (这里还比较复杂, 因为涉及到1.6前后的变更..)")]),e._v(" "),n("p",[e._v("synchronized几个要点, 不要锁常量对象, 不要随意改变锁的对象\nsynchronized也具有内存可见, 释放锁前必须把共享变量刷新到主存, 同时也解决指令重排问题")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("锁 CAS(自旋锁) 分段 JUC原子类")])]),e._v(" "),n("p",[e._v("CAS操作\t执行函数 CAS(Var,Exp,New) 如果V等于E, 则更新为N, 如果VE不同, 说明有其他线程做了修改, 继续循环检测, 故称为自旋锁\n属于乐观锁, 总认为自己可以成功操作 ; CAS系统原语(lock cmpxchg), 无法中断 ; CAS是针对一个变量的操作 ; CAS无法解决ABA;\nABA问题 复合问题 AtomicStampedReference和AtomicMarkableReference来解决(通过为修改对象添加版本号来实现)")]),e._v(" "),n("p",[e._v("Unsafe类 提供了硬件级的底层操作(申请/释放堆外内存(c/c++),修改数据), 使用受限")]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Lock ReentrantLock AQS")])]),e._v(" "),n("p",[e._v("Lock显式锁 支持中断,超时,非阻塞,支持condition,允许读锁,公平,(灵活但必须手动释放),一般使用sync,需要用到这些特性才使用lock\nLock的很多实现都是基于AQS的")]),e._v(" "),n("p",[e._v("AQS源码 AbstractQueuedSynchronizer AQS(同步器)是给我们实现锁的框架, 实现的关键是(CLH)队列和state状态, 使用了模板方法, 子类通过不同的tryAcquire, tryRelease等方法的实现可以编写不同的锁\nHLS队列的node节点 SHARED EXCLUSIVE(共享还是独占) 节点的等待状态 0(默认状态) 1:CANCELLED(取消) -1:SIGNAL -2:CONDITION(条件) -3:PROPAGATE(共享传播) 其中\nSIGNAL是指它的后一个节点被BLOCKED(park)了,如果本节点的锁释放或者取消了, 需要unpark后面的那个节点\nCONDITION使用一个简单的队列报错condition上的节点")]),e._v(" "),n("p",[e._v("acquire()模板逻辑: 首先尝试tryAcquire获取锁,\n如果失败则入队addWaiter()(独占模式),\n入队后根据前节点状态决定是否阻塞或继续争抢锁acquireQueued()(阻塞了迟早也会被前面节点unpark),如果前面是头结点了,尝试tryAcquire获取锁\n如果没有获取到,调用shouldParkAfterFailedAcquire()根据前置节点的wait状态, 判断本线程是否需要park\n如果是signal,说明前面节点会通知我,我就先park,返回true;\n进入parkAndCheckInterrupt(), park(), unpark后再返回线程状态是否被中断 (没被中断,就继续正常自旋,被中断了就直接打断本线程)\n如果是cancel,说明前面取消了,继续往前找,如果是其他状态,将前置节点设置为SIGNAL(CAS)返回false(进入acquireQueued中继续CAS)\n回到acquire(), 根据acquireQueued()的返回进行判断 true(说明park时线程被中断,就中断自己) false(说明获取到锁了)")]),e._v(" "),n("p",[e._v("FairSync公平同步器的tryAcquire实现 hasQueuedPredecessors(), 是否队列是空的/或者拥有锁的就是本线程 (非公平则没有这个判断,直接争抢锁)\naddWaiter() 将当前线程封装为节点,指定共享/独占模式,入队,CAS设置队尾\nacquireQueued() 自旋尝试获取资源, 是否park以及是否中断\nshouldParkAfterFailedAcquire() SIGNAL需要park, 其他不需要park(但需要向前遍历剔除cancel或将前节点设置为SIGNAL)\nparkAndCheckInterrupt() 调用park()的地方, 返回是否打断")]),e._v(" "),n("p",[e._v("release()模板逻辑: 调用子类 tryRelease 尝试释放资源,\n如果锁的数量全部释放成功, 调用unparkSuccessor()唤醒后继节点, 返回true\n如果没有全部释放(重入), 返回false\ntryRelease 子类实现举例 ReentrantLock的Sync同步器实现\n更新state, 如果更新后state为0, 返回true , 否则返回false(未全部释放)\nunparkSuccessor() 如果本节点wait状态小于0, 则置为0; 找到需要唤醒的节点(如果没有next了,或next的wait状态>0(CANCEL),就从尾部向前找状态<=0的节点),唤醒节点unpark();")]),e._v(" "),n("p",[e._v("acquireShared() 模板逻辑: 调用 tryAcquireShared 获取资源, -成功,结束; 失败,调用doAcquireShared()入队\ndoAcquireShared() 逻辑和acquireQueued类似, 区别在于: addWaiter()入队的是共享状态的节点, setHeadAndPropagate()如果还有剩余资源,唤醒后继节点的线程去获取资源\n-- 我放弃了..tryAcquireShared() ReentrantReadWriteLock中的实现 https://blog.csdn.net/panweiwei1994/article/details/78769703 帮助很大\n1.如果写锁被别人持有, 失败 2.否则这个线程有资格进入wrt状态, 根据队列规则判断是否需要block, 如果不阻塞, CAS状态state并更新count(这里不检查重入), 避免在非重入锁中检查 3.以上都失败的话回到full 版本继续循环")]),e._v(" "),n("p",[e._v("releaseShared() 模板逻辑: 以共享模式释放对象, 和release()相似, 区别在于releaseShared在释放一部分资源后就可以通知其他线程获取资源")]),e._v(" "),n("p",[e._v("Thread源码 Thread.start() 在JVM中发生了什么\nJVM调用pthread_create()方法, 向OS申请创建线程, 指定线程的运行地址(给线程分配独有的内存空间(线程栈)), 内核线程的初始运行是通过JavaCalls调用run()方法")]),e._v(" "),n("p",[e._v("常用api  JUC工具类, JUC锁, JUC原子类\nReentrantLock,CountDownLatch门闩,CyclicBarrier栅栏,Phaser阶段,ReadWhiteLock读写锁,Semaphore信号量(限流),Exchanger交换器,ThreadLocal\nLockSupport,AtomicLong,AtomicReference,AtomicReferenceArray,AtomicLongArray,AtomicLongFieldUpdater")]),e._v(" "),n("p",[e._v("JDK1.8新增 LongAdder,LongAccumulator,DoubleAccumulator\nLongAdder 比 AtomicLong更高效 使用了数组/分段锁(分治思想), 维护多个Long变量, 将线程数平摊, 最终将多个变量中的数据整合, 线程越多的时候效果明显 ConcurrentHashMap也用到了这种思想(本身就是数组)")]),e._v(" "),n("p",[e._v("Condition 等待条件, 配合lock使用, 拥有await(), signal()等方法, 对应于object的wait(), notify()方法 对比Object的监视器可以维护多个等待队列,支持通知指定等待队列")]),e._v(" "),n("p",[e._v("ReentrantReadWriteLock 读锁/共享锁, 优点:适用于共享数据很大, 读操作远大于写操作时 ;\n缺点:读线程太多,竞争不到写锁, StampedLock可以解决这个问题: 如果在读的过程中发生了写操作,应该重新读而不是阻塞写线程")]),e._v(" "),n("p",[e._v("LockSupport 比较基础的类,为其他类提供了park() unpark()基本线程阻塞原语, 可以先unpark, 相比wait,不需要锁,被打断的时候不会抛出异常")]),e._v(" "),n("p",[e._v("StampedLock是JDK1.8新增的一个锁, 读写锁的改进, 有三种模式写、读、乐观读(返回的stamp校验可用后才能使用)")]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("线程安全的java容器/集合(JUC容器/集合), java普通集合, 队列, 阻塞队列")])]),e._v(" "),n("p",[e._v("List \tCopyOnWriteArrayList\nSet\t\tCopyOnWriteArraySet↑\t↓ConcurrentSkipListSet\nMap\t\tConcurrentHashMap\tConcurrentSkipListMap\nQueue/Deque(双端队列)\tArrayBlockingQueue\tLinkedBlockingDeque\tConcurrentLinkedQueue")]),e._v(" "),n("p",[e._v("CopyOnWriteArrayList COW写时复制 , 线程安全的ArrayList , 所有写操作通过对底层数组进行一次新的复制实现 , 读操作则不受影响, 缺点是占用大量内存")]),e._v(" "),n("p",[e._v("HashMap  ConcurrentHashMap前置知识\n加载因子0.75\n为什么容量一定是2的次方/每次扩容翻倍\n因为取下标使用的是与操作 hash & (size-1) 为了保证低位都是1, 所以size必须是2的次方, (由于高位不会参与运算, 所以使用右移+异或让高位也参与)")]),e._v(" "),n("p",[e._v("JDK1.7 put新元素用的头插法: 新元素B,数组旧元素A,将B指向A,然后将数组这个位置赋值为B\nrehash扩容的时候死锁/死循环问题, 扩容会把链表掉头(头插法), 多线程可能出现循环链表")]),e._v(" "),n("p",[e._v("JDK1.8 红黑树 阈值8/6 put时候进行树操作/链表操作(加到链表尾部,因为要数链表的长度,就顺便加到尾部), 并判断是否需要树化")]),e._v(" "),n("p",[e._v("ConcurrentHashMap\t是基于HashMap实现的 相对于整个对象加锁(hashTable)\nJDK1.7 通过锁分段来实现线程安全, 将数组分成多个segments片段, 每个片段都是一个可重入锁, segments维护各自的HashMap, 操作使用锁和Unsafe操作\nJDK1.8 没有使用分段锁, CAS初始化, 无值CAS空bin操作, 有值且正在进行扩容->帮助扩容, 有值是链表或红黑树则整体加锁, 然后addCount, 是否resize(CAS)")]),e._v(" "),n("p",[e._v("ConcurrentSkipListMap\t线程安全的, 有序的 HashMap 对应无锁的TreeMap,因为没有针对树的CAS算法\n跳表是一种概率数据结构, 具有与平衡树相同的渐近期望时间, 并且更简单\n跳表 Node(存储数据) Index(层/索引) HeadIndex(索引头结点) NULL(表尾)\nfindPredecessor()查找前驱节点, 从头开始比较key大小, 往前或往后, 如果是null, 向下, 如果不是就循环判断\nget() 前驱的next , put() 如果需要新增, 找到位置插入/拼接 , remove() 如果找到,删除结点和高层索引,恢复其他索引")]),e._v(" "),n("p",[e._v("SynchronizedMap 把map放进去,然后给put..get等方法加锁(mutex)")]),e._v(" "),n("p",[e._v("BlockingQueue\t\n基本概念\nQueue就是队列,支持 offer() poll() peek()\nBlockingQueue强调Block阻塞, 也就是对生产消费者友好的线程安全模型, 支持put(),take()阻塞方法(condition实现)")]),e._v(" "),n("p",[e._v("ArrayBlockingQueue 基于数组的有界阻塞队列 ; LinkedBlockingQueue 链表实现\noffer() 加锁的\t调用 enqueue() 加入元素, 并signal唤醒 notEmpty\ntake() 加锁取元素 返回 dequeue() 如果为空需要await, 不为空就移除元素并signal唤醒 notFull")]),e._v(" "),n("p",[e._v("LinkedBlockingDeque 基于链表的阻塞双端队列\nofferFirst takeFirst(也就是take) offerLast(也就是offer) takeLast\n调用了 linkFirst linkLast unlinkFirst unlinkLast")]),e._v(" "),n("p",[e._v("ConcurrentLinkedQueue 非阻塞的,采用CAS操作的队列\n没有元素数量, size属性, lock, condition; size() 需要实时遍历元素数量 , offer() 和 poll() 使用CAS实现")]),e._v(" "),n("p",[e._v("DelayQueue\t\t指定任务执行顺序 (按时间进行任务调度,定时任务)\nPriorityQueue\t根据策略对元素排序\nSynchronusQueue\t容量永远为0, 例如:put就立即阻塞直到有其他线程take\nTransferQueue")]),e._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[n("p",[e._v("ThreadLocal 每个线程中拥有各自一份变量, set是将值设置到各自线程维护的map中 (应用:声明式事务)\n知识补全: 强引用(普通引用) 软引用 弱引用 虚引用\n强引用的对象不会被回收 软引用是在系统内存不够用的时候会被强制回收\n弱引用: 只要GC看到这个对象被弱引用(无强引用),就回收这个对象\nThread除了维护线程的tl(TheadLocal)还维护一个ThreadLocalMap, map中的key用弱引用指向tl的指向, 当线程结束只需要把tl指向null, 堆中的ThreadLocal对象会被GC回收 ; 但是map中的key-value对还是需要调用remove()方法移除, 保证不溢出\n虚引用: 用于操作堆外内存; GC是看到就回收, 但是回收后会在队列中offer一条记录, 可以通过队列记录来回收堆外内存 (NIO DirectByteBuffer 使用)")])]),e._v(" "),n("li",[n("p",[e._v("线程池 维护着线程集合和任务集合\n为什么使用线程池, 减少多线程下服务器在创建和销毁线程上的开销\nExecutor执行者; 有execute方法执行已提交的任务; 将任务提交与每个任务将如何运行的机制分离开\nExecutorService\t继承于Executor,扩展了执行者,有一些方法submit,invoke,shutdown,作为服务使用\nScheduledExecutorService 继承了 ExecutorService , 安排定时任务的接口\nAbstractExecutorService 提供 ExecutorService 接口的默认实现\nThreadPoolExecutor 自定义线程池 7个参数 继承于 AbstractExcutorService\n1.核心线程数 不会归还OS的线程\n2.最大线程数 超出核心线程, 最大额外扩展的线程总数\n3.生存时间 额外线程不使用的timeout后还给OS\n4.时间单位\n5.任务队列 BlockingQueue阻塞队列, 用来装任务, 不同的队列==>>不同排队策略的线程池\n6.线程工厂, 需要传ThreadFactory, 实现newThread()方法, 定义产生线程的方式, 可以定义线程名字, 线程组名字(用于jstack排查问题!) 定义守护线程, 优先级等\n7.拒绝策略: 线程池忙, 任务队列满的时候执行的策略, JDK默认提供4种(基本不用,一般自定义)\nAbort抛异常\nDiscard扔掉(不加入任务队列,不执行任务)\nDiscardOldest扔掉任务队列中存在最久的(最早加入的)\nCallerRuns调用者(线程)本身来处理任务")])])]),e._v(" "),n("p",[e._v("ThreadPoolExecutor 排队策略\nExecutors.newCachedThreadPool \t使用 \tSynchronousQueue\t没有队列保存任务,都给线程去跑\nExecutors.newFixedThreadPool\t使用\tLinkedBlockingQueue\t固定线程处理\nExecutors.newFixedThreadPool\tLinkedBlockingQueue\t只有一个线程处理\n线程池队列 正在执行的队列, 等待执行的阻塞队列, 等待进入阻塞队列的队列\n线程池状态 ctl对象一共32位,高3位保存线程池状态信息,后29位保存线程池容量信息\t\nRUNNING >shutdown>    SHUTDOWN >workers+Queue处理完> TIDYING > TERMINATED\n>shutdownNow> STOP\t   >workers处理完>")]),e._v(" "),n("p",[e._v("方法 execute() 根据队列和线程池状态和线程数量 addWorker 或 reject\nsubmit() 由 execute 实现\nshutdown() 设置SHUTDOWN, 不能添加新任务\nshutdownNow() 设置STOP, 直接中断线程")]),e._v(" "),n("p",[e._v("ScheduledThreadPoolExecutor\t多线程调度器\n重写execute方法使其支持延时执行/定时执行, 由ScheduledFutureTask进行调度, 运行的时候, 如果是定时任务, 除了运行还需要计算出下次执行时间\nDelayedQueue作为任务阻塞队列, 实现任务的定时调度")]),e._v(" "),n("p",[e._v("ForkJoinPool\t分解汇总的任务(Fork为若干子任务), 执行完之后进行结果的汇总(Join到一个结果)\n工作窃取算法(work-stealing)\t原来是线程集合去任务队列中获取任务, 现在每一个线程都有自己单独维护的队列, 当某个线程执行完自己的任务, 去别的线程的任务队列中偷任务执行\n特点: 充分利用线程进行并行计算, 减少竞争; 但是会消耗更多的系统资源")]),e._v(" "),n("p",[e._v("-- CompletionService")]),e._v(" "),n("ol",{attrs:{start:"7"}},[n("li",[n("p",[e._v("内存可见 volatile\n首先: JMM规范规定所有变量在main mem中, 线程有自己的工作内存(work mem), 线程对于变量读写在工作内存中完成, 线程之间无法直接访问, 只能通过主存互相访问\n内存不可见问题: java线程在堆中有各自私有的工作内存, 先从main mem(主存)中拷贝一份到工作空间, 首先修改自己内存再写回main mem, 但何时写回是不可控制(这个问题和cpu缓存有关)\nJMM规范中规定volatile执行写操作后, 要求 1.将工作内存的最新变量值强制刷新到主存 2.其他线程中的缓存无效; 通过JVM实现这两点保证可见性")])]),e._v(" "),n("li",[n("p",[e._v("指令重排 volatile happens-before 指令重排导致的DCL单例问题")])])]),e._v(" "),n("p",[e._v("指令重排是在代码最终结果一致的前提下, 重排指令以便于CPU更好的并行执行, 压榨性能")]),e._v(" "),n("p",[e._v("(JMM,JSR内存屏障)要在volatile编译后字节码中添加内存屏障来实现禁止指令重排序(LL SS LS SL) JVM一般的实现为: LL读LS SS写SL ;\n源码级别/汇编级别:c++是 1. volatile赋值(防止更改与主存不一致) 2. 赋值后的SL(即lock空操作, 保证了lock前后指令顺序) ;")]),e._v(" "),n("p",[e._v("JMM的happens-before原则, 规定了一些happensbefore的情况, 如A操作happensbefore操作B, 那么A对B可见且A排在B前面, 允许的重排序: 结果和按照HappensBefore原则执行的结果一致\n1. 线程中的每个操作 hb 线程的后续操作\n2. 解锁 \t\t\thb 下次加锁\n3. 对volatile变量的写 hb 读\n4. 传递性: 如果 A hb B ; B hb C ;那么 A hb C\n5. Thread.start() \thb 线程中的操作\n6. 线程中的操作 \thb 线程的终止监测(join, isAlive)\n7. interrupt() \t\thb 检测中断事件(interrupted())\n8. 对象的初始化 \thb 对象的finalize()方法")]),e._v(" "),n("p",[e._v("DCL单例问题, 可能会判断到半初始化状态的类, 所以需要静止指令重排序 new dup invokespecial")]),e._v(" "),n("ol",{attrs:{start:"9"}},[n("li",[e._v("一些基础\n线程开启方法 继承Thread, 实现Runnable, 线程池获取\n线程方法yield让出一次时间片, join阻塞等待某线程结束后执行, interrupt打断(给予异常), 原来还有停止(已过时)\n线程状态 NEW RUNNABLE(预备和执行) WAITING(JOIN,WAIT,PARK) BLOCKED(sync中等待获取锁) TIMEWAITING TERMINATED(结束后无法再次运行)\n守护线程 GC就是守护线程, 为其他线程服务, 当其他用户线程执行完毕, 虚拟机关闭, 守护线程也关闭了")])]),e._v(" "),n("p",[e._v("进程 线程 纤程\n进程是运行的程序,系统资源分配的基本单位,各自拥有内存空间和系统资源,创建进程需要开辟资源(内存空间,IO,PCB),进程结束回收资源,进程切换保留环境\n线程是\t\t\t 系统独立调度的基本单位, 共享进程资源, 可以并发执行, 进程拥有多个线程\n纤程是线程更小一级的划分,同样拥有内存栈,寄存器现场,但调度是由用户进行,优于线程的系统级调度(你无法开启上万线程但是可以有上万个纤程)一个线程可以有多个纤程")]),e._v(" "),n("p",[e._v("并发和并行 并发:一段时间内处理发生的多个事件,一般是针对一个服务的不同事件 并行:同一时间内处理多个事件,不同线程上的多个事件\n并发指任务提交, 并行指任务执行\n阻塞和非阻塞")]),e._v(" "),n("p",[e._v("Callable(任务) 和 Future(结果处理) ; FutureTask(前两者结合) ; CompletableFuture(管理类)")]),e._v(" "),n("p",[e._v("--多线程编程主要注意的问题 对象的发布和逸出,安全发布对象,原子性,可见性,线程封闭,不变性,安全委托 我放弃")]),e._v(" "),n("ol",{attrs:{start:"10"}},[n("li")]),e._v(" "),n("p",[e._v("顺序打印1A2B3C.. ,  wait notify 和 LockSupport\n线程间通讯 - wait notify "),n("em",[e._v("2 \tlatch")]),e._v("2\n生产/消费者问题 - sync可以写, 比较好的写法是使用ReentrantLock的Condition, 生产/消费者分类控制条件\n实现方法int count(String ip)返回ip访问次数")])])}),[],!1,null,null,null);t.default=a.exports}}]);