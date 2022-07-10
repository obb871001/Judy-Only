import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'normalize.css';
function tick(){
  const element = (
    <p className='mb-2' style={{color:"#f1f1f1"}}>{new Date().getMonth()+1}月{new Date().getDate()}日{new Date().toLocaleTimeString()}</p>
  );
  ReactDOM.render(
    element,
    document.getElementById('clock')
  );
};
setInterval(tick,1000)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

