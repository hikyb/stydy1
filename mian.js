/**
全局前置守卫(beforeEach)、 全局解析守卫(beforeResove)、 全局后置钩子(afterEach)、 路由独享守卫(beforeEnter)、 组件内的守卫(beforeRouterEnter / beforeRouterUpdate / beforeRouterLeave)
router是VueRouter的一个对象, $router.push ( {path: 'xx'} );本质是向history栈中添加一个路由， route是一个跳转的路由对象， 每一个路由都会有一个route对象， 可以获取对应的name, path, params, query等
Object.defineProperty() 的问题主要有三个: 不能监听数组的变化(push, pop, shift, unshift, splice, sort, reverse)， 必须遍历对象的每个属性， 必须深层遍历嵌套的对象
Object.defineProperty 拦截的是对象的属性，会改变原对象。 proxy 是拦截整个对象， 通过 new 生成一个新对象， 不会改变原对象。
VUE实现双向数据绑定的原理就是利用了 Object.defineProperty() 这个方法重新定义了对象获取属性值(get)和设置属性值(set)的操作来实现的

通过给父盒子添加flex属性， 控制子盒子的位置和排列方式
先从数列中找出一个数作为基准数， 把比这个数大的数放到它的右边， 小于它的数放到左边
外层容器设置高度，overflow scroll， 滑动列表绝对定位， 然后用列表元素的高度 * 列表元素的数量计算出滑动列表的高度， 动态计算可视区域在滑动列表中的偏移量， 并设置， 造成滑动效果
xmlhttprequest
underfined， null， boolean， number， string， object， symbol， bigint
函数组件可以写成无副作用的纯函数，函数组件中的this是underfined，类组件中的this指向的是当前组件实例对象，函数组件是一个纯函数，接受一个props返回一个react元素， 而类组件需要继承react.component并且创建render函数返回react元素， 函数组件没有生命周期和state
useReducer useCallback useMemo useRef
回流一定会引起重绘， 重绘不一定引起回流(页面一开始渲染的时候, 浏览器的窗口尺寸变化, 元素的尺寸, 位置发生变化, 添加或删除可见的DOM元素)
css3硬件加速transform opacity filters 对于复杂动画效果, 使用绝对定位让其脱离文档流 批量修改DOM
因为js中的代码，可能会对html的DOM产生影响(document.write). 所以在 JS 加载和执行完成前，后续资源的下载有可能是没必要的。这是 JS阻塞后续资源下载的根本原因
高阶组件：通过传递props去影响内层组件的状态,不直接改变内层组件的状态,降低了耦合度；不会出现组件多层嵌套,,,不清楚props来源与哪个高阶组件,写法繁琐
用JS对象表示DOM树的结构;然后用这个树构建一个真正的DOM树插到文档当中;当状态变更的时候,重新构造一棵新的对象树。然后用新的树和旧的树进行比较,记录两棵树差异;把差异应用到真实DOM树上,视图就更新了
loader用于对模块源码的转换 plugin目的在于解决loader无法实现的其他事，打包优化和压缩
缩小文件搜索范围rules: include  优化 resolve.extensions 配置 extensions:['js']  压缩代码  按需加载
避免使用@import 避免CSS表达式    避免通配选择器   移除无匹配的样式
push pop shift unshift splice reverse sort | concat split slice forEach map filter reduce some every
computed支持缓存，只有依赖数据发生改变，才会重新进行计算  watch不支持缓存，数据变，直接会触发相应的操作
computed不支持异步, watch支持异步        多对一或者一对一，一般用computed    watch:一对多
promise的核心原理其实就是发布订阅模式，通过两个队列来缓存成功的回调（onResolve）和失败的回调（onReject）
引用类型皆对象，每个对象都有原型，原型也是对象，也有它自己的原型，一层一层，组成原型链
访问对象属性时，在对象本身找不到，就在原型链上一层一层找。说白了就是一个对象可以访问其他对象的属性

都支持数据驱动视图, 不直接操作真实 DOM, 更新状态数据界面就自动更新，，，React 严格上只针对 MVC 的 view 层, Vue 则是 MVVM 模式
virtual DOM 不一样，vue 会跟踪依赖关系，不需要重新渲染整个组件树，react 将所有操作累加起来，计算所有变化都是，统一更新一次
数据绑定: vue 实现了数据的双向绑定,react 数据流动是单向的
react为每个任务增加了优先级，优先级高的任务可以中断低优先级的任务。然后再重新，注意是重新执行优先级低的任务
Fiber把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否还有剩余时间，如果有继续下一个任务；如果没有，挂起当前任务，将时间控制权交给主线程，等主线程不忙的时候在继续执行

JSONP，CORS(跨域资源共享)，Proxy，wss
typeof 操作符返回一个字符串，表示未经计算的操作数的类型
instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
创建XMLHttpRequest对象、通过 XMLHttpRequest 对象的 open() 方法与服务器建立连接、通过 XMLHttpRequest 对象的 send() 方法，将客户端页面的数据发送给服务端、onreadystatechange 事件用于监听服务器端的通信状态，主要监听的属性为XMLHttpRequest.readyState
1：请求已经建立、2：请求已发送、3：请求在处理中、4：响应已完成
NaN -> null    undefined -> 空     时间戳 -> 字符串时间    Infinity -> null
防抖是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行
React的核心理念之一就是，界面是数据的不同形式的简单投影。相同的输入应该产生相同的输出，，，类的组件主要是面向对象编程，是建立在继承之上 函数组件主要是函数式编程，无副作用，更加透明
高阶函数是一个接收函数作为参数或将函数作为输出返回的函数 (map, filter, reduce, setInterval, Promise, 高阶组件)
由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，，，导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除
闭包的用处，一是读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中
const定义的变量不可以修改,而且必须初始化
最大的特点是强类型, 可以在编译期间发现并纠正错误，降低了试错的成本

// constants actions reducer store
// 在组件中派发一个action，在action中通过store的dispatch方法派发给store
// store接收action连同之前的state一起传给reducer，reducer返回新的数据给store

params state search (react)
params query 路由路径占位 (vue)
*/

Function.prototype.bind = function (thisArg, ...argArray) {
    let fn = this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    function proxyFn (...args) {
        const tempArgs = [...argArray, ...args]
        const result = fn.apply(thisArg, tempArgs)
        return result
    }
    return proxyFn
}

function paseQueryString (urlStr) {
    const str = url.split("?")[1]
    const items = str.split("&")
    const result = {}
    let arr
    for(var i=0; items.length; i++){
        arr = items[i].split('=')
        result[arr[0]] = arr[1]
    }
    return result;
}

function renderTpl(tpl, data) {
    Object.keys(data).forEach( key => {
        tpl = tpl.replace(`{${key}}`, data[key])
    })
    return tpl
}
  
const find = function (origin) {
    let obj = new Object(origin)
    Object.defineProperty(obj, 'where', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (where) {
            for (let key in where) {
                if (where.hasOwnProperty(key)) {
                    obj = obj.filter((v) => where[key].test(v[key]))
                }
                return find(obj)
            }
        }
    })
    Object.defineProperty(obj, 'orderBy', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (key, order) {
            obj.sort((a, b) => {
                if (order == 'desc') {
                    return b[key] - a[key]
                } else {
                    return a[key] - b[key]
                }
            })
            return find(obj)
        }
   })
    return obj
}