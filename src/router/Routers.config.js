import React from 'react';
import Loadable from 'react-loadable';

const LoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        return <div>小主真可怜,未找到此页面.</div>;
    }
    else {
        return null;
    }
};

export const Login = Loadable({
    loader: () => import('../page/login/Login'),
    loading: LoadingComponent
});
export const App = Loadable({
    loader: () => import('../App'),
    loading: LoadingComponent
});

export const mockPage = Loadable({
    loader: () => import('../page/mockPage'),
    loading: LoadingComponent
});


