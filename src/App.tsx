import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleText from './components/SimpleText';
import SimpleMaterial from './components/SimpleMaterial';
import BottomNavigation from './layouts/BottomNavigation';
import ExpensePage from './pages/expense/ExpensePage';
import IncomePage from './pages/income/IncomePage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

   
        <Switch>
         <Route exact path="/">
           <ExpensePage />
          </Route>

          <Route path="/income">
            <IncomePage />
          </Route>
          
        </Switch>

    </Router>
  );
}

export default App;
