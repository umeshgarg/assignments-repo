import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Assignment0 from './count';
import Sip from './sip';
// import Temp from './temp'

ReactDOM.render(
  <React.StrictMode>
    <Sip /> 
    {/* <Assignment />  */}
    {/* <Temp />  */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
function Nav() {
  return (
    <>
      <ul>
        <li>Home</li>

        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default Nav;