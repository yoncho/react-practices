import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: window.location.href.substring(window.location.href.lastIndexOf("/"))});

    useEffect(()=>{
        const handlePopState = (e)=>{
            setRoute(e.state);
        };
        window.addEventListener('popstate', handlePopState);

        return ()=>{
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const handleLinkClick = (e) => {
        e.preventDefault();
        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
        console.log(url);
        window.history.pushState({page:url}, e.target.text, url);
        setRoute({page:url});
    }

    return (
        <div>
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
            {
                (()=>{
                    switch (route.page) {
                        case '/':
                            return <Main/>
                        case '/gallery':
                            return <Gallery/>
                        case '/guestbook':
                            return <Guestbook/>
                    }
                })()
            }
        </div>
    )
}