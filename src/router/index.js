import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import Category from '@/pages/category/category.vue'
import Cart from '@/pages/cart/cart.vue'
import Personal from '@/pages/personal/personal.vue'
import Theme from '@/pages/theme/theme.vue'
import Detail from '@/pages/detail/detail.vue'
import Picker from '@/components/utils/picker.vue'
// 重置样式
import '../assets/css/reset.scss'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Picker',
      component:Picker
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/theme',
      name: 'Theme',
      component: Theme
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
