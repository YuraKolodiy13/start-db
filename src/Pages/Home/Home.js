import React, {Component} from 'react';
import RandomPlanet from "../../components/RandomPlanet/RandomPlanet";
import ErrorBtn from "../../components/ErrorBtn/ErrorBtn";
import People from '../../Pages/People/People'
import Starships from "../../Pages/Starships/Starships";
import Planets from "../../Pages/Planets/Planets";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

class App extends Component{


  render(){

    return(
      <ErrorBoundary>
        <RandomPlanet/>
        <People/>
        <Starships/>
        <Planets/>
        <ErrorBtn/>
      </ErrorBoundary>
    )
  }
}

export default App;