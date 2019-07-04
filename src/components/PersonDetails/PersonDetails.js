import React, {Component} from 'react'
import './PersonDetails.scss'
import SwapiService from '../../services/swapi-service'
import Loader from "../Loader/Loader";

export default class PersonDetail extends Component{

  state = {
    person: null,
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
    const {personId} = this.props;
    if(!personId) return;
    this.swapiService.getPerson(personId)
      .then(person => {
        this.setState({
          person,
          loading: false
        })
      })}

  render(){

    if(!this.state.person) {
      return <Loader/>
    }

    return(

      <React.Fragment>
        {
          this.state.loading
            ? <Loader/>
            : <div className='ItemList'>
              <div className="imgWrap">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${this.state.person.id}.jpg`} alt=""/>
              </div>
              <div className='InfoWrap'>
                <h4>{this.state.person.name}</h4>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item ListItem'>
                    <span className='term'>Gender: </span>
                    <span>{this.state.person.gender}</span>
                  </li>
                  <li className='list-group-item ListItem'>
                    <span className='term'>Birth Year: </span>
                    <span>{this.state.person.birthYear}</span>
                  </li>
                  <li className='list-group-item ListItem'>
                    <span className='term'>Eye Color: </span>
                    <span>{this.state.person.eyeColor}</span>
                  </li>
                </ul>
              </div>
            </div>
        }
      </React.Fragment>
    )
  }
}