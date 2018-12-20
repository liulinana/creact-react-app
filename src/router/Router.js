import React from 'react';
import {BrowserRouter,Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Loadable from 'react-loadable';
let history = createBrowserHistory()

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
}

const Login = Loadable({
    loader: () => import('../page/login/Login'),
    loading: LoadingComponent
});
const App = Loadable({
    loader: () => import('../App'),
    loading: LoadingComponent
});

const route = [
    {path:"/",exact:true,component:Login},
    {path:"/frame",exact:false,component:App},
];

export default class Router extends React.Component{
     render () {
         return (
             <div>
                 <BrowserRouter>
                     <Switch>
                         {route.map((v,k)=>(
                             <Route
                                 key={k}
                                 path={v.path}
                                 exact={v.exact}
                                 component={v.component}
                             />
                         ))}
                     </Switch>
                 </BrowserRouter>
             </div>
         )
     }
 }