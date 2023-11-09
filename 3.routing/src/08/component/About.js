import React from 'react';
import {SiteLayout} from "../layout";
import styles1 from '../assets/scss/component/About.scss';
import styles2 from '../assets/scss/component/about/Navigation.scss';
import {useNavigate} from 'react-router';

export default function About() {
    const navigate = useNavigate();
    setTimeout(()=>{
        // 코드상 page 이동을 할 경우 navigate 사용!
        // window.location.href="/error";
        navigate('/error');
    }, 3000);
    return (
        <div className={styles1.About}>
            <h2>kickscar 입니다.</h2>
        </div>
    );
}