import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import *as Routers from './Routers.config';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from '../redux/reducers/rootReducer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk,promise)
);

const route = [
    {path:"/", exact:true, component:Routers.Login},
    {path:"/frame", exact:false, component:Routers.App},
    {path:"/read", exact:true, component:Routers.ReadingRoom},
];

export default class Router extends React.Component{
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
