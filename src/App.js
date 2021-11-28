import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import GetAll from './Components/GetAll/GetAll';
import getallfavorites from './Components/GetAll/GetAllFavorites';
import UserPage from './Pages/UserPage/UserPage.jsx';


function App() {
  return (
    <div className="App">
      <UserPage/>
    </div>
  );
}

export default App;

/*
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={GetAll} />
          <Route path='/' component={getallfavorites} />

        </Switch>
      </Router>
*/