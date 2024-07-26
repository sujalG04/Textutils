import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'white';
      showAlert("Dark mode is enable!", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode is enable!", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/about" element={<About mode={mode}/>}></Route> */}

          {/* <Route path='/' element={<Textform showAlert={showAlert} label="Enter your Text" mode={mode} />}></Route> */}
          <Textform showAlert={showAlert} label="Enter the text to analyze below" mode={mode} />
        {/* </Routes> */}
    {/* </Router> */}


    </>

  );
}

export default App;
