import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Main from "./Main.js"
class App extends Component{
  render(){
  return (
    <React.Fragment>
      <Route exact path= "/" component={Main} />
    </React.Fragment>
  );
  }
}

export default App;
