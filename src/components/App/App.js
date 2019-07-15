import './App.scss'
import React, {Component} from 'react';
import Header from '../Header/Header';
import {Route, Switch, Redirect} from 'react-router-dom'
import People from '../../Pages/People/People'
import Starships from "../../Pages/Starships/Starships";
import Planets from "../../Pages/Planets/Planets";
import Home from "../../Pages/Home/Home";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Login from "../../Pages/Login/Login";
import SecretPage from "../../Pages/SecretPage/SecretPage";

class App extends Component{

  state = {
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  };


  render(){

    return(
      <ErrorBoundary>
        <Header isLoggedIn={this.state.isLoggedIn}/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" render={() => <Login onLogin={this.onLogin} isLoggedIn={this.state.isLoggedIn}/>}/>
          <Route path="/secret-page" render={() => <SecretPage isLoggedIn={this.state.isLoggedIn}/>}/>
          <Route path="/people" component={People}/>
          <Route path="/starships" component={Starships}/>
          <Route path="/planets" component={Planets}/>
          <Route render={() => <h2>Page not found</h2>}/>
          {/*<Redirect to='/' />*/}
        </Switch>
      </ErrorBoundary>
    )
  }
}

export default App;