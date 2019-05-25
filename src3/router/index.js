import Vue from 'vue'
import VueRouter from 'vue-router'

import First from '../pages/First.vue'
import Second from '../pages/Second.vue'
import FirstChild from '../pages/FirstChild.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/first',
            component: First,
            children: [
                {
                    path: '/first/child',
                    component: FirstChild,
                }
            ]
        },
        {
            path: '/second',
            component: Second
        }
    ]
})