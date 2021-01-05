import './App.css';
import { Login } from "./components/login";
import { Register } from "./components/register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Header } from "./components/header";
import { Switch, Route } from "react-router-dom";
import { Cards } from "./components/cards.js"
import { Food } from "./components/food";
import { FoodNutrients } from "./components/foodNutrients";

const App = () => {
  const [ showLogIn, setShowLogIn ] = useState(true)
  const [ showRegister, setShowRegister ] = useState(false)
  const [ loggedIn, setLoggedIn ] = useState(false)
  return (
    <div className="App">
      <Login show={showLogIn} onHide={() => setShowLogIn(false)}
             showRegister={() => setShowRegister(true)} setLogdedIn={setLoggedIn}/>
      <Register show={showRegister} onHide={() => setShowRegister(false)} showLogin={() => setShowLogIn(true)}/>
        <Switch>
            {
                loggedIn && (
                    <>
                       <Header />
                        <Route exact path="/">
                            <Cards />
                        </Route>
                        <Route exact path="/food" component={Food} />
                      <Route exact path="/foodNutrients" component={FoodNutrients} />
                    </>
                    )
            }
        </Switch>
    </div>
  );
}

export default App;
