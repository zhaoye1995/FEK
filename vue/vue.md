# 目录

## vue 的双向绑定是如何实现的？ vue2.0 和 vue3.0 的实现有什么不同?

1. vue2.0

    - 通过object.defineProperty()劫持各个属性的setter，getter，数据变动时发布消息给订阅者，触发监听回调
    - observer遍历对vue各个属性进行监听。每个属性建立个依赖收集对象，get中收集依赖,set中触发依赖，调用更新函数。
    - compile(解析)解析模版指令，对视图初始化。将节点绑定更新函数。
    - watcher做observer和compile之间的通信。

    - 缺点
        - 无法检测到对象属性的新增或删除
        - 不能监听数组的变化（对数组基于下标的修改、对于 .length 修改的监测）

2. vue 3.0
    - 通过proxy代理监听整个对象，代理针对的是整个对象而不是像object.defineProperty针对某个属性。
    - 在目标对象之前架设一层拦截,外界对该对象的访问,都必须经过这层拦截

    - 缺点
        - proxy有兼容性问题,无完全的polyfill
        - 性能问题,proxy的性能其实比promise还差

    参考： [Vue双向绑定原理](https://juejin.cn/post/6844904040791277575)

## 如何自己实现一个简单的 vue（2.0版本）

> 参考 [vue 的双向绑定原理及实现](https://juejin.cn/post/6844903479044112391)
> TODO: 补全 MyVue 文件夹中 `Observer.js` 和 `Watcher.js` 中标明 TODO 的方法
> 可以直接在浏览器中打开 MyVue 文件夹中 `index.html` 文件进行调试
>