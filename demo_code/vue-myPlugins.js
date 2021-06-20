/*
vue的插件库
* */

(function () {
    //需要向外暴露的插件对象
    const MyPlugin = {}
    //插件对象必须有一个install()
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
            console.log('vue函数对象的方法myGlobalMethod()')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', function (el, binding) {
            el.textContent = binding.value.toUpperCase()
        })

        // 4. 添加实例方法
        //实例的方法会有意在方法名前加一个$
        Vue.prototype.$myMethod = function () {
            console.log('vue实例对象的方法$myMethod()')
        }
    }
})()