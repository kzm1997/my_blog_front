import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index/Index.vue'
import auth from '@/utils/auth'
import store from '@/store'
import {Message} from 'element-ui'
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
import blogwrite from '@/components/ivews/blog/BlogWrite'
import ArticleView from '@/components/ivews/article/articleView'
import CategoryView from '@/components/ivews/category/categoryView'
import TagView from '@/components/ivews/category/tagView'

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
                },
                meta:{
                    requireLogin:true
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
                        path: 'avataredit',
                        name: 'avataredit',
                        component: AvatarEdit
                    },
                    {
                        path: 'accountedit',
                        name: 'accountedit',
                        component: AccountEdit
                    },
                    {
                        path: 'extendsinformation',
                        name: 'extendsinformation',
                        component: ExtendsInformation
                    }
                ]
            },
            {
                path: 'write',
                name: 'write',
                components: {
                    content: blogwrite
                },
                meta:{
                    requireLogin:true
                }
            },
            {
                path: 'articleView',
                name: 'articleView',
                components: {
                    header: SimpleHeader,
                    content: ArticleView
                }
            },
            {
                path: 'category',
                name: 'category',
                components: {
                    header: SimpleHeader,
                    content: CategoryView
                }
            },
            {
                path: 'tag/:id',
                name: 'tag',
                components: {
                    header: SimpleHeader,
                    content: TagView
                }
            }

        ]
    }

]


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    //todo 这里可能要token过期判断
    if (auth.getToken()) {
        console.log(111)
        if (to.path === '/login' || to.path === '/register') {
            next({path: '/'})
        } else {
            if (store.state.user.nickname.length === 0) {
                store.dispatch('getUserInfo').then(() => {
                    next()
                }).catch(() => {
                    next({path: '/'})
                })
            }
        }
    } else {
        console.log(222)
        if (to.matched.some(r =>r.meta.requireLogin)){
            console.log(333)
            Message({
                type: 'warning',
                showClose: true,
                message: '请先登录哦'
            })
            next(from)
        }
        next()
    }
})

export default router
