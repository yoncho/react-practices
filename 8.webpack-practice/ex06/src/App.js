import './assets/scss/App.scss'
import logo from './assets/images/logo.svg'
function App(){
    const App = document.createElement('div');
    App.textContent = "hello webpack :D";
    App.className = "Header";
    App.innerHTML = `<img src='${logo}'>`;
    return App;
}

export {App};