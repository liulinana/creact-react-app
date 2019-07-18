import routes from "../page-route";
import Loadable from "react-loadable";
import *as Routers from './Routers.config';

const allRoute = routes.map(item => (
    {
        path:item.path,
        component: Loadable({
            loader: item.component,
            loading: Routers.LoadingComponent,
        }),
        key:item.path
    }
));

const routePage = (path) => {
     let page = allRoute.find(item => item.path === path);
     return page.component
};

export const allMenu = [
    {
        name: '首页',
        url: '/home',
        exact:true,
        icon: 'home',
        component:routePage('/mockPage')
    }, {
        name: '音乐模块',
        url: '/mockPage',
        exact:true,
        icon: 'bars',
        children: [
            {
                name: '音乐系列',
                url: '/mockPage/mus',
                exact:true,
                component: routePage('/mockPage')
            },
        ]
    },{
        name: '工具模块',
        url: '/tool',
        exact:true,
        icon: 'tool',
        children: [
            {
                name: '小应用',
                url:''
            }, {
                name: '富文本编辑器',
                url: '/editor'
            }, {
                name: '待办事项',
                url: '/todoList'
            },
        ],
    },
    {
        name: '画廊模块',
        url: '/pic',
        icon: 'edit',
        children: [
            {
                name: '时光相片',
                url: '/album'
            },
            {
                name: '瀑布流',
                url: '/waterfall'
            },
        ],
    }, {
        name: '搜索模块',
        url: '/search',
        icon: 'search',
        children: [
            {
                name: '搜索引擎',
                url: '/searchEngine'
            },
        ],
    }, {
        name: '开发模块',
        url: 'dev',
        icon: 'apple-o',
        children: [
            {
                name: '更多模块开发中',
                url: '/todo'
            },
        ],
    }, {
        name: '项目地址',
        url: '/follow',
        icon: 'heart-o',
    }
];