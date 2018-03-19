import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Post from '@/pages/Post'
import Post1 from '@/pages/Post1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/post1',
      name: 'Post1',
      component: Post1
    }
  ]
})
