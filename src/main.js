import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/font_icon/iconfont.css'
import '@/assets/theme/index.css';
import httpRequest from '@/utils/httpRequest';
import lodash from 'lodash'
import Moment from 'moment';


//定义时间全局过滤器
Vue.filter('convertDate', function (value) {
    return Moment(value).format('YYYY-MM-DD');
})
Vue.filter('convertDatezhun', function (value) {
    return Moment(value).format('YYYY-MM-DD HH:mm:ss');
})

import { VeeValidate ,config} from './validate/validate'

Vue.use(VeeValidate,config);
import  {
    Button,
    Menu,
    Submenu,
    Card,
    Tag,
    MenuItem,
    Divider,
    MenuItemGroup,
    Message,
    Avatar,
    Form,
    Radio,
    RadioButton,
    RadioGroup,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Input,
    InputNumber,
    FormItem,
    Select,
    Cascader,
    Switch,
    Slider,
    TimePicker,
    DatePicker,
    Upload,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Container,
    Main,
    Dialog,
    MessageBox,
    Tooltip,
    Pagination,
    Loading,
    Option,
    OptionGroup,
    Backtop,
    Timeline,
    TimelineItem,
    Popconfirm
} from 'element-ui'
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Button);
Vue.use(OptionGroup);
Vue.use(Option);
Vue.use(Loading.directive);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Card);
Vue.use(Popconfirm);
Vue.use(Tag);
Vue.use(Divider);
Vue.use(Avatar);
Vue.use(Form);
Vue.use(Radio);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(FormItem);
Vue.use(Cascader);
Vue.use(Switch);
Vue.use(Slider);
Vue.use(TimePicker);
Vue.use(DatePicker);
Vue.use(Upload);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Container);
Vue.use(Main);
Vue.use(Dialog);
Vue.use(Pagination);
Vue.use(Tooltip);
Vue.use(Select);
Vue.use(Backtop);
Vue.prototype.$message = Message;
Vue.prototype.$confirm=MessageBox.confirm;
Vue.config.productionTip = false
Vue.prototype.$http=httpRequest;
Vue.prototype.$loading=Loading.service;


Object.defineProperty(Vue.prototype, '$_', { value: lodash })



/*const routerPush = router.prototype.push
router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
