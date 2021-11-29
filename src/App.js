import logo from './kermit.jpg';
import logo2 from './Trig.jpg';
import './App.css';
import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import NavbarVer2 from './NavbarVer2';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './views/Chat';
import Home from './views/Home';


//Implement Control + C as a button bound.


function App() {


  return (

    <div className="App">
      
  <BrowserRouter>
      <NavbarVer2/>
      <Switch>
   
   
                <Route path='/'  exact
                 >
                   <Home props />
                   </Route>
                <Route path='/Covid' >
                  <Chat />
                  </Route>


      </Switch>

      
    </BrowserRouter>
    
      
    </div>
  );
}




export default App;
{/*

  function closeTab(){
    window.close();
}
*/}
 {/*<button type="button" onClick={closeTab}>
        EXIT</button> */} 