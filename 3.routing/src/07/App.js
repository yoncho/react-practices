import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {Routes, Route} from 'react-router';
import { useRoutes } from 'react-router';

import Main from "./component/Main";
// import {Gallery} from "./component/gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import Error404 from "./component/error/Error404";
import {Login, Join, Settings} from './component/user';

import './assets/scss/App.scss'
import { SiteLayout } from './layout';

export default function App() {
    return useRoutes([
        { path:'/', element: <Main />},
        // { path:'/gallery', element: <Gallery />},
        { path:'/guestbook', element: <Guestbook />},
        { path:'/about', element: <About />},
        { path:'/user/join', element: <Join />},
        { path:'/user/login', element: <Login />}
    ]);

    //08의 경우 아래와 같이 사용할 수 있음...!
    useRoutes([{
        path:'/', 
        element: <SiteLayout />,
        children: [
            { path:'', element: <Main />},
            { path:'guestbook', element: <Guestbook />},
            { path:'about', element: <About />},
            { path:'user/join', element: <Join />},
            { path:'user/login', element: <Login />}
        ]
    }]);
}