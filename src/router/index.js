import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index/Index.vue'
import SimpleHeader from '@/components/header/SimpleHeader.vue'
import Login from '@/components/ivews/login/Login.vue'
import Footer from '@/components/footer/FooterComponent'
import HomeContent from '@/components/content/HomeContent'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Index',
    component:Index,
    children:[
        {
            path:'/',
            name:'index',
            components:{
                header:SimpleHeader,
                content:HomeContent,
                footer:Footer
            }
        },
        {
            path:'login',
            name:'Login',
            components:{
                header:SimpleHeader,
                content:Login,
                footer:Footer
            }
        }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
