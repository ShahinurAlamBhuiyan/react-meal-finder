import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import MealDetail from './components/MealDetail/MealDetail';
import MealFinder from './components/MealFinder/MealFinder';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login'
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderComplete from './components/OrderComplete/OrderComplete';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>User : {loggedInUser.name}</p>
      <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MealFinder />
          </Route>
          <Route path="/home">
            <MealFinder />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment />
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/meal/:id">
            <MealDetail />
          </Route>
          <Route path="/orderComplete">
            <OrderComplete />
          </Route>
          <Route path="*">
            <h1>Sorry, Your page not found !</h1>
          </Route>
        </Switch>
      </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
