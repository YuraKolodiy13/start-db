import React, {Component} from 'react'
import ItemList from "../../components/ItemList/ItemList";
import ErrorIndicator from '../../components/ErrorIndicator/ErrorIndicator'
// import StarshipDetails from "../../components/StarshipDetails/StarshipDetails";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
// import ErrorBtn from '../../components/ErrorBtn/ErrorBtn'

export default class Starships extends Component {

  state = {
    selectedPerson: 15,
    hasError: false
  };


  swapiService = new SwapiService();

  componentDidCatch(){
    this.setState({
      hasError: true
    })
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    })
  };

  render(){

    if(this.state.hasError){
      return <ErrorIndicator/>
    }

    return (
      <div className="mainWrap">
        <ErrorBoundary>
          <ItemList getData={this.swapiService.getAllStarships} onPersonSelected={this.onPersonSelected} personId={this.state.selectedPerson}/>
          <ItemDetails getDetail={this.swapiService.getStarship} personId={this.state.selectedPerson} imgLink='starships'/>
          {/*<ErrorBtn/>*/}
        </ErrorBoundary>
      </div>
    )
  }
}

