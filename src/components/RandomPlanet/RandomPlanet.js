import React, {Component} from 'react';
import './RandomPlanet.scss'
import SwaoiService from '../../services/swapi-service'

export default class RandomPlanet extends Component{

  swapiService = new SwaoiService();

  state = {
    planet: {}
  };

  constructor(){
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({planet})
  };

  updatePlanet(){
    const id = 11;
    this.swapiService.getPLanet(id).then(this.onPlanetLoaded);
  }

  render(){
    return (
        <div className='PlanetWrap'>
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
                <span className='term'>Diametr: </span>
                <span>{this.state.planet.diameter}</span>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}
