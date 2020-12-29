import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
// import {BrowserRouter} from 'react-router-dom'


// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );




ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
  <App />
  </Router>, 
  document.getElementById('root')
  );