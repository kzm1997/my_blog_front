import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index/Index.vue'
import SimpleHeader from '@/components/header/SimpleHeader.vue'
import Login from '@/components/ivews/login/Login.vue'
import Footer from '@/components/footer/FooterComponent'
import HomeContent from '@/components/content/HomeContent'
import Register from '@/components/ivews/login/Register'
import PersonPage from '@/components/ivews/Person/PersonPage'
import PersonEdit from '@/components/ivews/Person/PersonEdit'
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
            name:'login',
            components:{
                header:SimpleHeader,
                content:Login,
                footer:Footer
            }
        },
        {
            path:'register',
            name:'register',
            components:{
                header:SimpleHeader,
                content: Register,
                footer:Footer
            }
        },
        {
            path:'person',
            name: 'person',
            components:{
                header:SimpleHeader,
                content:PersonPage,
                footer:Footer
            }
        },
        {
            path:'personedit',
            name:'personedit',
            components:{
                header:SimpleHeader,
                content: PersonEdit,
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
