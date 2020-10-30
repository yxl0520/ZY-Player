import Vue from 'vue'
import { Message, MessageBox, Button, Table, TableColumn, Tag, Input, Dialog, Form, FormItem, Switch, Select, Option } from 'element-ui'
import Plugin from 'v-fit-columns'
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Switch)
Vue.use(Plugin)
Vue.use(Select)
Vue.use(Option)
Vue.prototype.$message = Message
Vue.prototype.$prompt = MessageBox.prompt
