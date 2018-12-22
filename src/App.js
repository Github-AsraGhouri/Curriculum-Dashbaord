import React, { Component } from 'react';
import Header from './layouts/Header';
import Dashboard from './components/dashboard/index'
// import Footer from './layouts/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <Dashboard/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
