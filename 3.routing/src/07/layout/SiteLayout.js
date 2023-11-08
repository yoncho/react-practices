import React from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import styles from '../assets/scss/layout/Content.scss';
import { Outlet } from 'react-router';

export default function SiteLayout() {
    return (
        <>
            <Header/>
            <div className={styles.Content}>
                <Outlet />
            </div>
            <Navigation/>
            <Footer/>
        </>
    );
}