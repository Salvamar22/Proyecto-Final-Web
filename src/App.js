import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Componentes/UserView/Components/NavBar/NavBar';
import GetAll from './Componentes/UserView/Components/GetAll/GetAll';
import getallfavorites from './Componentes/UserView/Components/GetAll/GetAllFavorites';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={GetAll} />
          <Route path='/' component={getallfavorites} />

        </Switch>
      </Router>



    </div>
  );
}

export default App;
