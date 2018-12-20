import React from 'react';
import Loadable from 'react-loadable';

const LoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        return <div>Sorry,未找到页面.</div>;
    }
    else {
        return null;
    }
};
const mockPage = Loadable({
    loader: () => import('../page/mockPage'),
    loading: LoadingComponent
});


const allMenu = [
    {
        name: '首页',
        url: 'frame/home',
        exact:true,
        icon: 'home',
        component: mockPage
    }, {
        name: '音乐模块',
        url: 'frame/mockPage',
        exact:true,
        icon: 'bars',
        children: [
            {
                name: '音乐系列',
                url: 'frame/mockPage/mus',
                exact:true,
                component: mockPage
            },
        ]
    }, {
        name: '工具模块',
        url: 'frame/tool',
        exact:true,
        icon: 'tool',
        children: [
            {
                name: '小应用',
                url: 'frame/tool/tools'
            }, {
                name: '富文本编辑器',
                url: 'editor'
            }, {
                name: '待办事项',
                url: 'todoList'
            },
        ],
    }, {
        name: '画廊模块',
        url: 'pic',
        icon: 'edit',
        children: [
            {
                name: '时光相片',
                url: 'album'
            },
            {
                name: '瀑布流',
                url: 'waterfall'
            },
        ],
    }, {
        name: '搜索模块',
        url: 'search',
        icon: 'search',
        children: [
            {
                name: '搜索引擎',
                url: 'searchEngine'
            },
        ],
    }, {
        name: '开发模块',
        url: 'dev',
        icon: 'apple-o',
        children: [
            {
                name: '更多模块开发中',
                url: 'todo'
            },
        ],
    }, {
        name: '项目地址',
        url: 'frame/follow',
        icon: 'heart-o',
    }]

export default allMenu;