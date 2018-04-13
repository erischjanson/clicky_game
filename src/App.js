import React, { Component } from 'react';
import FoodCard from './components/FoodCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import foods from './foods.json';
// import logo from './logo.svg';
import './App.css';

let currentScore = 0;
let shuffledFoods = foods;

class App extends Component {


  state = {
    foods,
    currentScore
  }

  handleIncrement = id => {
    this.setState({ currentScore: this.state.currentScore + 1 });
    console.log("working");

    // shuffledFoods.sort(() => Math.random());
    //sort()takes parameter a, which is .5 and parameter b, which is a randomly generated number between 0-1, not including 1. If .5-random number is negative, then a will be sorted to an index lower than be. If .5-random number is positive, a will be sorted to a higher index than b. This is done for each item in the array.
    shuffledFoods.sort((a,b) => 0.5 - Math.random());
    
  };

  render() {
    return (
      <Wrapper>
        <Title>Foods List</Title>
        <p>{this.state.currentScore}</p>
        {this.state.foods.map(food => (

          <FoodCard 
          handleIncrement = {this.handleIncrement}
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
