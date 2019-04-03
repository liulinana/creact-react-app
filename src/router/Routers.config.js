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

export  const Error404 = Loadable({
    loader: () => import('../page/Error/Error404'),
    loading: LoadingComponent,
});

export const Login = Loadable({
    loader: () => import('../page/login/Login'),
    loading: LoadingComponent,
});
export const App = Loadable({
    loader: () => import('../App'),
    loading: LoadingComponent,
});

export const mockPage = Loadable({
    loader: () => import('../page/MockPage'),
    loading: LoadingComponent,
});

export  const ReadingRoom = Loadable({
    loader: () => import('../page/ReadingRoom/ReadingRoom'),
    loading: LoadingComponent,
});




