import React, {Component} from 'react'
import './ItemList.scss'
import SwapiService from '../../services/swapi-service'
import Loader from "../Loader/Loader";

export default class ItemList extends Component{

  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount(){
    this.swapiService.getAllPeople()
      .then(peopleList => {
        this.setState({
          peopleList
        })
  })}

  onItemSelected = (id) => {
    this.props.onPersonSelected(id);
    this.setState({
      id
    })
  }

  render(){

    if(!this.state.peopleList) {
      return <Loader/>
    }

    return(
      <ul className='item-list list-group ItemList'>
        {this.state.peopleList.map(({id, name}) =>
          <li
            key={id}
            className={`list-group-item ListItem hovered ${+this.props.personId === +id ? 'active' : null}`}
            onClick={() => this.onItemSelected(id)}>
            {name}
          </li>)}
      </ul>
    )
  }
}