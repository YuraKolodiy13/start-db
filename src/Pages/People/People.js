import React, {Component} from 'react'
import ItemList from "../../components/ItemList/ItemList";
import ItemDetails from '../../components/ItemDetails/ItemDetails'
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
// import ErrorBtn from "../../components/ErrorBtn/ErrorBtn";

export default class People extends Component {

  state = {
    selectedPerson: 1
  };

  swapiService = new SwapiService();


  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    })
  };


  render(){

    return (
      <div className="mainWrap">
        <ErrorBoundary>
          <ItemList getData={this.swapiService.getAllPeople} onPersonSelected={this.onPersonSelected} personId={this.state.selectedPerson}/>
          <ItemDetails getDetail={this.swapiService.getPerson} personId={this.state.selectedPerson} imgLink='characters'/>
        </ErrorBoundary>
      </div>
    )
  }
}
