//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      tpyeof : type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#052c65';
      showAlert("Dark Mode has been enabled", "");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#f0f0f0';
      showAlert("Light Mode has been enabled", "");
    }
  }
  
  return (
    <>
    <Router basename="/Textutils-React">
        <Navbar title= 'TextUtils' modeForm={mode} changeMode={toggleMode}/>{/*navbar component*/}
        <Alert makeAlert={alert} modeForm={mode}/>
         
          
        <div className="container my-3">
          <Routes>
            <Route exact path="/Textutils-React"
            element = {<TextForm label= 'Text Utility Tools | Word Convertor | Text Tool Area' viewAlert={showAlert} modeForm={mode}/> } />
          </Routes>
        </div>

        <div className="container my-3">{/* changing of mode using button in a component container */}
          <Routes>
              <Route exact path="/about"
              element = {<About title='About the app' modeForm={mode} /> } />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
