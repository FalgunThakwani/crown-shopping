import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import Homepage from './homepage-component';

const Hats = ()=>(
  <div>
  <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/hats" component={Hats}/>
      </Switch>
     
    </div>
  );
}

export default App;
