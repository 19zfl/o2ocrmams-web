import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import echarts from './views/charts/echarts.vue'
import Department from "./views/system/Department.vue";
import Home from "./views/Home.vue";


let routes = [
    {
        path: '/',
        component: Home,
        name: '首页',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-s-home',
        children: [
            { path: '/echarts', component: echarts, name: '首页'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '组织',
        leaf: false,//只有一个节点
        iconCls: 'el-icon-s-custom',
        children: [
            { path: '/dm', component: Department, name: '部门管理'},
            // { path: '/emp', component: Employee, name: '员工管理'},
        ]
    },
    {
        //前端访问路径
        path: '/login',
        //对应的组件或者叫模板
        component: Login,
        //模板展示的名字
        name: 'Login',
        //hidden 隐藏
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;