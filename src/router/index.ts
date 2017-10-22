import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import TestTS from '@/components/TestTS.vue'
import TestHttp from '@/components/TestHttp.vue'
import TestHttpRetInterface from '@/components/TestHttpRetInterface.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/ts',
      name: 'TS',
      component: TestTS
    },
    {
      path: '/http',
      name: 'Http',
      component: TestHttp,
      props: {
        url: 'https://jsonplaceholder.typicode.com/users',
        params: {}
      }
    },
    {
      path: '/httpInterface',
      name: 'Http returning to an interface',
      component: TestHttpRetInterface
    }
  ]
})
