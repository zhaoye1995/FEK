/**
 * Watcher 类
 * 会在 observableTarget 中的属性发生变化时，执行对应的回调函数
 */
class Watcher {
    /**
     * 构造函数
     * @param {observable} observableTarget 观察对象
     * @param {string} key 指定的观察属性
     * @param {function} cb 回调函数
     */
    constructor(observableTarget, key, cb) {
        this.cb = cb
        this.key = key
        this.observableTarget = observableTarget
    }

    /**
     * TODO: 实现 update 函数
     * 调用 update 函数的时候，会打印 observableTarget 的 key 属性，
     * 同时执行 cb 函数, cb 函数的参数是 observableTarget 的 key 属性值
     */
    update() {
        const value = this.observableTarget[this.key]
        console.log(value)
        this.cb(value)
    }

}