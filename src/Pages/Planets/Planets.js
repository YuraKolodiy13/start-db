import React, {Component} from 'react'
import ItemList from "../../components/ItemList/ItemList";
import ErrorIndicator from '../../components/ErrorIndicator/ErrorIndicator'
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
// import ErrorBtn from '../../components/ErrorBtn/ErrorBtn'

export default class Planets extends Component {

  state = {
    selectedPerson: 2,
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
          <ItemList getData={this.swapiService.getAllPlanets} onPersonSelected={this.onPersonSelected} personId={this.state.selectedPerson}/>
          <ItemDetails getDetail={this.swapiService.getPLanet} personId={this.state.selectedPerson} imgLink='planets'/>
          {/*<ErrorBtn/>*/}
        </ErrorBoundary>
      </div>
    )
  }
}
