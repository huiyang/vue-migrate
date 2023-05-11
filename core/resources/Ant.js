import { createApp, defineAsyncComponent } from 'vue'

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
        
        this.vue.component('custom-field', defineAsyncComponent(() => import('./Field')))

       	this.vue.mount('#gravity')  
    }
}
