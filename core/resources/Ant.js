import { createApp } from 'vue'

export default class Ant {
    constructor () {
        this.vue = createApp()

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
        
        this.vue.component('custom-field', require('./Field').default)

       	this.vue.mount('#gravity')  
    }
}
