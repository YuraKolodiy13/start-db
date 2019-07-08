import React, {Component} from 'react'
import './ItemList.scss'
import Loader from "../Loader/Loader";

export default class ItemList extends Component{

  state = {
    itemList: null
  };

  componentDidMount(){
    const {getData} = this.props;
      getData()
      .then(itemList => {
        this.setState({
          itemList
        })
  })}

  onItemSelected = (id) => {
    this.props.onPersonSelected(id);
    this.setState({
      id
    })
  }

  render(){

    if(!this.state.itemList) {
      return <Loader/>
    }
    return(
      <ul className='item-list list-group ItemList'>
        {this.state.itemList.map(({id, name}) =>
          <li
            key={id}
            className={`list-group-item ListItem hovered ${+this.props.personId === +id ? 'active' : ''}`}
            onClick={() => this.onItemSelected(id)}>
            {name}
          </li>)}
      </ul>
    )
  }
}