import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import type { Directive, DirectiveBinding, VNode } from 'vue'

export const appear: Directive = {
    beforeMount(element: HTMLElement) {
        element.style.visibility = 'hidden';
    },
    updated(element: HTMLElement, binding: DirectiveBinding<boolean>,
        node: VNode) {
        if (!binding.value === !binding.oldValue || null === node.transition) {
            return
        }
        if (!binding.value) {
            node.transition.leave(element, () => {
                element.style.visibility = 'hidden'
            })
            return
        }
        node.transition.beforeEnter(element)
        element.style.visibility = ''
        node.transition.enter(element)
    }
}

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse)


import './assets/main.css'
import './style.css'


const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('appear', appear)


app.mount('#app')
