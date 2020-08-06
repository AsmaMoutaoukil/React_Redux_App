import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from "redux"
import allTheActions from "./Redux/actions"
import { connect } from "react-redux"
class App extends Component {

  render(){
    return (
    <div className="App">
      <header className="App-header">
      {this.props.showimage && <img src={logo} className="App-logo" alt="logo" />}  
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>   
        <button onClick={()=> this.props.rootActions.displayimage()}>Click her for display logo react!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
   
    </div>
  );
  }
  
}
const mapStateToProps = state => {
  return {
    showimage: state.rootReducers.showimage,
 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    rootActions: bindActionCreators(allTheActions.rootActions, dispatch)
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);

