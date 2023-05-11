window.Ant.booting(function(Vue, router, store) {
    window.Vue = Vue
    console.log('addon booting', Vue.version)
    Vue.component('custom-field2', require('./Field').default)
})