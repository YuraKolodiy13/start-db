import './App.scss'
import React, {Component} from 'react';
import Header from '../Header/Header';
import {Route, Switch} from 'react-router-dom'
// import RandomPlanet from "../RandomPlanet/RandomPlanet";
// import ErrorBtn from "../ErrorBtn/ErrorBtn";
import People from '../../Pages/People/People'
import Starships from "../../Pages/Starships/Starships";
import Planets from "../../Pages/Planets/Planets";
import Home from "../../Pages/Home/Home";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

class App extends Component{

  render(){

    return(
      <ErrorBoundary>
        <Header/>
        <Switch>
          <Route path="/people" component={People}/>
          <Route path="/starships" component={Starships}/>
          <Route path="/planets" component={Planets}/>
          <Route path="/" component={Home}/>
        </Switch>
      </ErrorBoundary>
    )
  }
}

export default App;