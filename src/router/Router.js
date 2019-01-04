import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import *as Routers from './Routers.config';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from '../redux/reducers/rootReducer';
let history = createBrowserHistory();

const store = createStore(
    rootReducer,
    applyMiddleware(promise)
);

const route = [
    {path:"/",exact:true,component:Routers.Login},
    {path:"/frame",exact:false,component:Routers.App},
];

export default class Router extends Component{
     render () {
         return (
             <div>
                 <Provider store={store}>
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
                 </Provider>
             </div>
         )
     }
 }