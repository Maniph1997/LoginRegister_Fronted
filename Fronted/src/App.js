import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user,setLoginUser]= useState({})
  return (
    <div className="App">
    
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
            }
            </Route>
          <Route path="/Login">
            <Login setLoginUser={setLoginUser}/>
            </Route>
          <Route path="/Register">
            <Register/>
            </Route>
        </Switch>
      </Router>
        
      
    
     
       
       {/* <Login/> */}
       {/* <Register/> */}
       
    </div>
  );
}

export default App;
