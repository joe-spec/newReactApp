import React from 'react';
import './App.css';
import { robots } from '../robots';
import Login from '../container/login/login';
import SearchBox from '../component/searchbox/searchbox';
import CardList from '../component/cardlist/cardlist';
import Scroll from '../component/scroll/scroll';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchField: '',
      robots :robots,
      login: true
    }
  }

  onInputChange = (event) => {
    this.setState({ searchField: event.target.value})    
  }

  login = () => {
    this.setState({ login: false })
  }

  render() {
    const filterRobots = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className='light-green'>Disciples of Jesus</h1>

        {
          this.state.login ?
          <Login  onLogin={ this.login }/>: null
        }

        <SearchBox onInputChange={ this.onInputChange }/>

        {
          !filterRobots.length ? <h1>no disciple found</h1> : null
        }
        <Scroll>
          <CardList robots={ filterRobots }/>
        </Scroll>
      </div>
    );
  }
}

export default App;