import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
/*import VueIconfont  from  'vue-iconfont'
import '@/assets/icon/font_icon/iconfont.css';
import '@/assets/icon/font_icon/iconfont.js';*/
import '@/assets/theme/index.css';

import  {
    Button,
    Menu,
    Submenu,
    Card,
    Tag,
    MenuItem,
    Divider,
    MenuItemGroup,
    Message
} from 'element-ui'
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Divider);

Vue.prototype.$message = Message;
/*Vue.use(VueIconfont, [
    {
        tag: 'v-icon',
        prefix: 'v-icon',
        type: 'font'
    }
])*/
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
