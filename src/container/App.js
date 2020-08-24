import React from 'react';
import './App.css';
import { robots } from '../robots';
import CardList from '../component/cardlist';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchField: '',
      robots :robots
    }
  }

  onInputChange = (event) => {
    this.setState({ searchField: event.target.value})    
  }

  render() {
    // console.log(this.state.searchField)
    const filterRobots = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className='light-green'>Robo Friends</h1>
        <div>
          <input type="text" 
            placeholder='search robots' 
            className='pa3 ba b--green bg-lightest-blue'
            onChange={ this.onInputChange }
          />
        </div>
        <CardList robots={ filterRobots }/>
      </div>
    );
  }
}

export default App;