import React, { Component } from 'react';
import FoodCard from './components/FoodCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import foods from './foods.json';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    foods,
    // currentScore
  }

  // handleIncrement = 

  render() {
    return (
      <Wrapper>
        <Title>Foods List</Title>
        {this.state.foods.map(food => (

          <FoodCard 
          // handleIncrement = {this.handleIncrement}
          id = {food.id}
          key = {food.id}
          name = {food.name} 
          image = {food.image}         
          />
        ))}        
      </Wrapper>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
