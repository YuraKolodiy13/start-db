import './App.scss'
import React, {Component} from 'react';
import Header from '../Header/Header';
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import SwapiService from '../../services/swapi-service'

class App extends Component{
  swapiService = new SwapiService();
  render(){
    return(
        <div>
          <Header/>
          <RandomPlanet getPerson={this.swapiService.getPerson}/>
        </div>
    )
  }
}

export default App;