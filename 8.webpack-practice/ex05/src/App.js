import './assets/scss/App.scss'
function App(){
    const App = document.createElement('div');
    App.textContent = "hello webpack :D";
    App.className = "Header";
    return App;
}

export {App};