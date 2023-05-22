/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


//router
import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  
import './index.css';  
import App from './App';  
import About from './about'  
import Contact from './contact'  
  
const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1> 
      <Routes>
      <Route path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
      </Routes>
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  

