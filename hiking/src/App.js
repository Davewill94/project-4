import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import TrailShow from './components/TrailShow';
import React, { Component } from 'react';

import { createUser, loginUser, verifyUser, destroyProfile, putProfile} from './services/api_helper';
import ProfileContainer from './components/ProfileContainer';
import ProfilePage from './components/ProfilePage';
import UpdateProfilePage from './components/UpdateProfilePage';

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
    this.props.history.push(`/profile/${currentUser.id}`);
  }
  
  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await createUser(registerData);
    this.setState({currentUser});
    this.props.history.push(`/profile/${currentUser.id}`);
  }
  
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
      this.props.history.push(`/profile/${currentUser.id}`);
    }
  }

  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.props.history.push('/login');
    this.setState({currentUser: null});

  }

  deleteProfile = async (id) => {
    await destroyProfile(id);
    this.handleLogout();
  }

  updateProfile = async (e, id, profileData) => {
    e.preventDefault();
    const updatedProfile = await putProfile(id, profileData);
    this.setState({ 
      currentUser: updatedProfile
    });
    this.props.history.push(`/profile/${updatedProfile.id}`)
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
        
        {this.state.currentUser ? 
          <div>
            <p>Hello {this.state.currentUser.username}</p>
            <button onClick={this.handleLogout}>Logout</button>
          </div> :
          <Link to='/login'><button>Login/Register</button></Link>
        }

        <Route path="/login" render={() => (
          <Login handleLogin={this.handleLogin}/>
        )} />
        <Route path="/register" render={() => (
          <SignUp handleRegister={this.handleRegister} />
        )} />
        <Route exact path='/profile/:id' render={() => (
          <ProfilePage currentUser={this.state.currentUser} deleteProfile={this.deleteProfile}/>
        )} />
        <Route path="/profile/:id/edit" render={() => (
          <UpdateProfilePage currentUser={this.state.currentUser} updateProfile={this.updateProfile}/>
        )} />
      </div>
    );
  }

}

export default withRouter(App);
