import './App.scss'
import React, {Component} from 'react';
import Header from '../Header/Header';
import RandomPlanet from "../RandomPlanet/RandomPlanet";
// import SwapiService from '../../services/swapi-service'
import ItemList from "../ItemList/ItemList";
import PersonDetail from "../PersonDetails/PersonDetails";
import ErrorBtn from "../ErrorBtn/ErrorBtn";

class App extends Component{

  state = {
    selectedPerson: 1
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    })
  }
  render(){
    return(
        <div>
          <Header/>
          <RandomPlanet/>
          <div className="mainWrap">
            <ItemList onPersonSelected={this.onPersonSelected} personId={this.state.selectedPerson}/>
            <PersonDetail personId={this.state.selectedPerson}/>
          </div>
          <ErrorBtn/>
        </div>
    )
  }
}

export default App;