import * as Vue from 'vue'
import App from './App.vue'

export default class Ant {
    constructor () {
        this.vue = Vue.createApp(App)
        window.Vue = Vue

        // Callbacks
        this.bootingCallbacks = []
    }

    booting (callback) {
        this.bootingCallbacks.push(callback)
    }

    boot () {
        this.bootingCallbacks.forEach((callback) => {
            callback(this.vue, this.router, this.store)
        })
        
        this.vue.component('custom-field', Vue.defineAsyncComponent(() => import('./Field.vue')))

       	this.vue.mount('#gravity')  
    }
}
