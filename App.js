import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743f';
      showAlert("Dark mode is enabeled", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabeled", "success");
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title='React.js' aboutText='Anout' mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about">
              <About />
            </Route> */}
        {/* <Route exact path="/"> */}
        <Textform showAleart={showAlert} heading='Enter the txt to analyze' mode={mode} />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
