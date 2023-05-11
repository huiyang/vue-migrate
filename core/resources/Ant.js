import { createApp } from 'vue'
import Vue from 'vue'

export default class Ant {
    constructor () {
        this.vue = createApp()
        window.Vue = Vue

        // Callbacks
        this.bootingCallbacks = []
        this.bootedCallbacks = []
    }

    booting (callback) {
        this.bootingCallbacks.push(callback)
    }

    boot () {
        this.bootingCallbacks.forEach((callback) => {
            callback(this.vue, this.router, this.store)
        })
        
        this.vue.component('custom-field', require('./Field').default)

       	this.vue.mount('#gravity')  

        this.bootedCallbacks.forEach((callback) => {
            callback(this.vue)
        })
    }

    booted (callback) {
        this.bootedCallbacks.push(callback)
    }
}
