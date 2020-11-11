import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import TrailShow from './components/TrailShow';


function App() {
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

export default App;
