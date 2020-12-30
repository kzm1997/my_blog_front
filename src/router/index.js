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
import TimeLine from '@/components/timeline/TimeLine'
import CategoryArticle from '@/components/ivews/category/categoryArticle'

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
                    content: HomeContent,
                    footer: Footer
                },
            },
            {
                path: 'login',
                name: 'login',
                components: {
                    content: Login
                }
            },
            {
                path: 'register',
                name: 'register',
                components: {
                    content: Register
                }
            },
            {
                path: 'person',
                name: 'person',
                components: {
                    header: SimpleHeader,
                    content: PersonPage
                },
                meta: {
                    requireLogin: true
                }
            },
            {
                path: 'personedit',
                name: 'personedit',
                components: {
                    header: SimpleHeader,
                    content: PersonEdit,
                },
                redirect: {
                    name: 'basematerialedit'
                },
                meta: {
                    requireLogin: true
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
                meta: {
                    requireLogin: true
                }
            },
            {
                path: 'articleView/:id',
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
            },
            {
                path: 'timeline',
                name: 'timeline',
                components: {
                    header: SimpleHeader,
                    content: TimeLine
                }
            },
            {
                path: 'cArticle/:id',
                name: 'cArticle',
                components: {
                    header: SimpleHeader,
                    content: CategoryArticle,
                    footer: Footer
                }
            }

        ]
    }

]


const router = new VueRouter({
    mode: 'history',
    routes
})

const rpOnce = (() => {
    let lastKey = null;
    let timer = null;
    return (cb = () => {
    }, key) => {
        if (lastKey === key) {
            return;
        }
        clearTimeout(timer);
        cb(key);
        lastKey = key;
        timer = setTimeout(() => {
            clearTimeout(timer);
            lastKey = null;
        }, 1200);
    };
})();

const toast = msg =>
    rpOnce(iMsg => {
        Message({
            type: 'warning',
            showClose: true,
            message: iMsg
        })
    }, msg);
const needAuth = new Set(['/login', '/register'])
router.beforeEach((to, from, next) => {
    if (auth.getToken()) {
        if (needAuth.has(to.path)) {
            next();
        } else if (store.state.user.user.email.length === 0) {
            store.dispatch('getUserInfo').then(() => {
                next()
            }).catch(() => {
                next({path: '/'})
            })
        } else {
            next()
        }
    } else if (to.matched.some(r => r.meta.requireLogin)) {
        toast('请先登录哦')
        next(from);
    } else {
        next()
    }

})


export default router
