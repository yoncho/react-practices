import React from 'react';
import {SiteLayout} from "../layout";
import styles1 from '../assets/scss/component/About.scss';
import styles2 from '../assets/scss/component/about/Navigation.scss';

export default function About() {
    return (
        <SiteLayout>
            <div className={styles1.About}>
                <h2>kickscar 입니다.</h2>
            </div>
        </SiteLayout>
    );
}