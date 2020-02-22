import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/font_icon/iconfont.css'
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
    Tooltip
} from 'element-ui'
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Card);
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
Vue.use(Select);
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
Vue.use(Tooltip);
Vue.prototype.$message = Message;
Vue.prototype.$confirm=MessageBox.confirm;
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
