function App(){
    const App = document.createElement('div');
    App.textContent = "hello world :D";
    return App;
}

document.getElementById('root').appendChild(App());