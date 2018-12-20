import React, { Component } from 'react';
import Loadable from 'react-loadable';

const LoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry,未找到此页面.</div>;
    }
    else {
        return null;
    }
};
const mockPage = Loadable({
    loader: () => import('../page/mockPage'),
    loading: LoadingComponent
});

export default class AA extends Component{

    render () {
        return (
            this.handelClick()
        )
    }
}

