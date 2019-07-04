import React, {Component} from 'react';
import './RandomPlanet.scss'
import SwapiService from '../../services/swapi-service'
import Loader from "../Loader/Loader";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class RandomPlanet extends Component{

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };


  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  };

  togglePlanet = () => {
    clearInterval(this.interval);
    if(this.state.planet){
      this.setState({
        planet: null,
        loading: true
      });
    } else {
      this.updatePlanet();
      this.interval = setInterval(this.updatePlanet, 5000);
    }
};

  updatePlanet = () => {
    const id = Math.floor(Math.random()*17) + 3;
    this.swapiService.getPLanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render(){
    return (
      <div className='RandomPlanet'>
        {
          this.state.loading
          ? <Loader/>
          : this.state.error
            ? <ErrorIndicator/>
            : <div className='PlanetWrap'>
              <div className="imgWrap">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${this.state.planet.id}.jpg`} alt=""/>

              </div>
              <div className='InfoWrap'>
                <h4>{this.state.planet.name}</h4>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item ListItem'>
                    <span className='term'>Population: </span>
                    <span>{this.state.planet.population}</span>
                  </li>
                  <li className='list-group-item ListItem'>
                    <span className='term'>Rotation Period: </span>
                    <span>{this.state.planet.rotationPeriod}</span>
                  </li>
                  <li className='list-group-item ListItem'>
                    <span className='term'>Diameter: </span>
                    <span>{this.state.planet.diameter}</span>
                  </li>
                </ul>
              </div>
            </div>
        }
        <div className="btn" onClick={() => this.togglePlanet()}>toggle planet</div>
      </div>
    )
  }
}
