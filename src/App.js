import './App.css';
import { Login } from "./components/login";
import { Register } from "./components/register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const App = () => {
  const [ showLogIn, setShowLogIn ] = useState(true)
  const [ showRegister, setShowRegister ] = useState(false)
  return (
    <div className="App">
      <Login show={showLogIn} onHide={() => setShowLogIn(false)} showRegister={() => setShowRegister(true)}/>
      <Register show={showRegister} onHide={() => setShowRegister(false)}/>
    </div>
  );
}

export default App;
