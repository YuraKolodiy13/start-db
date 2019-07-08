import React, {Component} from 'react'
import './ItemDetails.scss'
import SwapiService from '../../services/swapi-service'
import Loader from "../Loader/Loader";

export default class ItemDetails extends Component{

  state = {
    item: null,
    loading: true
  }

  swapiService = new SwapiService();

  componentDidMount(){
    this.updatePerson();
  }

  componentDidUpdate(prevProps){
    if(this.props.personId !== prevProps.personId){
      this.setState({
        loading: true
      });
      this.updatePerson();
    }
  }


  updatePerson(){
    const {personId, getDetail} = this.props;
    if(!personId) return;
    getDetail(personId)
      .then(item => {
        this.setState({
          item,
          loading: false
        })
      })}

  capitalize(str) {
    const arr = str.split('_').map(item => item.slice(0,1).toUpperCase() + item.slice(1));
    return arr.join(' ');
  }

  render(){

    if(!this.state.item) {
      return <Loader/>
    }

    return(

      <React.Fragment>
        {
          this.state.loading
            ? <Loader/>
            : <div className='ItemList'>
              <div className="imgWrap">
                <img src={`https://starwars-visualguide.com/assets/img/${this.props.imgLink}/${this.state.item.id}.jpg`} alt=""/>
              </div>
              <div className='InfoWrap'>
                <h4>{this.state.item.name}</h4>
                <ul className='list-group list-group-flush'>
                  {Object.keys(this.state.item).map(key => (
                    <li key={key} className='list-group-item ListItem'>
                      <span className='term'>{this.capitalize(key)}: </span>
                      <span>{this.state.item[key]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        }
      </React.Fragment>
    )
  }
}