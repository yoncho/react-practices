import React from 'react';
import '../assets/scss/layout/Header.scss';
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>
                <NavLink to={'/'}>Header</NavLink>
            </h1>
            <ul>
                <li>
                    <NavLink to={'/user/login'}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={'/user/join'}>Joing</NavLink>
                </li>
                <li>
                    <NavLink to={'/user/setting'}>Setting</NavLink>
                </li>
            </ul>
        </header>
    );
}