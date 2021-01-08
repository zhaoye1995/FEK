class Vue {
    /**
     * @param {object} props 
     */
    constructor(props) {
        const {
            rootSelector,
            data,
            key,
        } = props
        this.key = key
        this.data = data
        this.rootEl = document.querySelector(rootSelector)
        // 设置初始化的 html 值
        this.rootEl.innerHTML = this.data[this.key]
        
        /**
         * TODO: 补全构造函数
         * 使用 observe、 Watcher 和 Vue 类中的 update 函数, 
         * 将 data 和 html 模板连接起来
         */
        observe(this.data)
        const watch = new Watcher(this.data, this.key, val => {
            this.update(val)
        })
        return this
    }

    /**
     * 用更新后的数据来刷新 html
     * @param {string} newVal 更新后的数据
     */
    update(newVal) {
        this.rootEl.innerHTML = this.parse(newVal)
    }

    parse(data) {
        const value = data.split('')
        let t = ''
        while(value.length) {
            const n = parseInt(value.splice(0,5).join(''), 10)
            t += String.fromCharCode(n)
        }
        return t
    }
    
}