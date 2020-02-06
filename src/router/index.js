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
import BaseMaterialEdit from '@/components/person/BaseMaterialEdit'
import AvatarEdit from '@/components/person/AvatarEdit'
import AccountEdit from '@/components/person/AccountEdit'
import ExtendsInformation from '@/components/person/ExtendsInformation'
import blogwrite from '@/components/ivews/blog/blogwrite'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Index',
        component: Index,
        children: [
            {
                path: '/',
                name: 'index',
                components: {
                    header: SimpleHeader,
                    content: HomeContent,
                    footer: Footer
                }
            },
            {
                path: 'login',
                name: 'login',
                components: {
                    header: SimpleHeader,
                    content: Login,
                    footer: Footer
                }
            },
            {
                path: 'register',
                name: 'register',
                components: {
                    header: SimpleHeader,
                    content: Register,
                    footer: Footer
                }
            },
            {
                path: 'person',
                name: 'person',
                components: {
                    header: SimpleHeader,
                    content: PersonPage,
                    footer: Footer
                }
            },
            {
                path: 'personedit',
                name: 'personedit',
                components: {
                    header: SimpleHeader,
                    content: PersonEdit,
                },
                children: [
                    {
                        path: 'basematerialedit',
                        name: 'basematerialedit',
                        component: BaseMaterialEdit
                    },
                    {
                        path:'avataredit',
                        name:'avataredit',
                        component:AvatarEdit
                    },
                    {
                        path:'accountedit',
                        name:'accountedit',
                        component:AccountEdit
                    },
                    {
                        path:'extendsinformation',
                        name:'extendsinformation',
                        component:ExtendsInformation
                    }
                ]
            },
            {
                path:'write',
                name:'write',
                components:{
                    content:blogwrite
                }
            }

        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
