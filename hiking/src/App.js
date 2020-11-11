import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import TrailShow from './components/TrailShow';
import React, { Component } from 'react';

import { registerUser, loginUser, verifyUser, allCities } from './services/api_helper';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({currentUser});
    //push to profile
  }
  
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
      //push to profile
    }
  }

  componentDidMount() {
    this.handleVerify();
  }


  render() {
    return (
      <div className="App">
        <Header /> 
        <Route exact path='/'>
          <HomePage />
        </Route> 
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/signup" >
          <SignUp />
        </Route>
        <Route path="/gettrail" >
          <TrailShow />
        </Route>

      </div>
    );
  }

}

export default withRouter(App);
