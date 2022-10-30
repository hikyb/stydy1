// var a = {n: 1}; 
// var b = a; 
// a.x = a = {n: 2}; 
// a.x // 这时 a.x 的值是多少  undefined
// b.x // 这时 b.x 的值是多少  {n: 2}

// key: 更好的更新虚拟DOM

// JS对象有一个指向原型对象的链条（proto），当访问一个对象的属性时，会顺着链条（链头：Object）一层一层网上寻找（就近原则），直到链尾。
// 实现继承
// 链条上的内容都可以访问到，prototype可以实现原型的继承和属性的共享（引用类型）
// 避免了代码的冗余，可以随时调用共同的属性和方法
// 减少了内存

// // 函数柯里化：把接收多个参数的函数转化成接收一个单一参数的函数，并且返回接收余下参数的新函数的技术
// // function add(a,b) {return a+b}  | add(1,2)   ->    function curryingAdd(a) {return function(b) {a+b}}  | curryingAdd(1)(2)

// 从一个组件创建、数据初始化、挂载、更新、销毁，这就是一个组件所谓的生命周期

// 当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着同步变化；可以这样说用户在视图上的修改会自动同步到数据模型中去，数据模型也是同样的变化。
// 数据的双向绑定的实现是来源于Object.defineProperty()这个函数，通过这个函数可以监听到get和set事件
// vue2: Object.defineProperty 重新定义 data 中所有的属性
// Vue的双向绑定是根据发布者-订阅者模式实现的。监听者Observer监听数据是否变化并在发生变化时告诉订阅者Watcher（利用Objec.defineProperty实现数据的劫持，再通过set和get方法通知订阅者），若更新则更新相对应的数据和视图。
// 全称： Model-View-ViewModel ， Model 表示数据模型层。 view 表示视图层， ViewModel 是 View 和 Model 层的桥梁，数据绑定到 viewModel 层并自动渲染到页面中，视图变化通知 viewModel 层更新数据。


computed计算属性的特点
// 支持缓存，依赖的数据发生了变化，才回重新进行计算
// 不支持异步，当computed中有异步操作时，数据的变化是无法监听到的
// computed中的值是来自于data中已声明的值或者是从props中拿到的值进行计算得到的
// computed中，使用get方法和set方法，当computed属性值是函数时默认走get方法，当数据变化时，默认使用set方法
// computed多用于多对一或一对一的关系

// watch监听属性的特点
// 不支持缓存，数据跟随着变化而变化
// 支持异步操作
// 监听的函数有两个参数，一个是新值，一个是输入之前的值
// 监听的数据必须是已经声明过得数据（data中或者是props中存在）
// 一对多

// v-show其实是控制css中的display，只会编译一次
// v-if是动态的在DOM树上进行元素的添加和删除，但是v-if比较消耗性能

// vuex是Vue的状态管理工具。vuex一共有五个核心模块：
// store 用来存放数据状态
// mutations 对于store中的数据的操作，用commit调用，(state, payload)
// getters 对store中的数据进行加工return，可以直接使用
// actions 异步操作，用dispatch调用，(context, payload)
// modules 模块化状态管理,将store分成不同的模块，每个模块都拥有store、mutations、getters、actions

const inBrowser = typeof window !== "undefined"; // 判断是否在浏览器环境运行
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const arr = [1, 2, 3]
const [...newArr] = arr // newArr = arr.concat()  newArr = arr.slice(0)
var arr2 = [].concat.apply([], arr1)

function flatten(arr) {
	return [].concat(...arr.map(x => Array.isArray(x) ? flatten(x) : x))
}
var arr2 = arr.toString().split(',');
var arr2 = arr.join().split(',');

Immutable
// 其实 Immutable 不是 React 的任何一部分。React 唯一需要的是知道 state 何时改变了，但 React 无法监控深层次的 state 对象变化。那如何避免程序员不小心改变了深层次的对象但 React 不知道呢？训练程序员使用 Immutable，使得程序员不能修改对象，只能创建新对象，这样就能保证 React 一定能监控到变化
// 在react控制的回调函数中: 生命周期勾子 / react事件监听回调
// 非react控制的异步回调函数中: 定时器回调 / 原生事件监听回调 / promise回调