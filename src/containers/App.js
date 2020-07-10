import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
//import { consoles } from './consoles'  // Si no es export default, hay que hacer destructuring.


class App extends Component {
  constructor() {
    super();
        this.state = {
          robots: [],
          searchfield:''
        }
  }

componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
}

// si estamos en un componente hayq ue hacer arro fnction para referinos a est this
 onSearchChange = event => {
  this.setState({ searchfield: event.target.value })
 }

  render(){
    const { robots, searchfield } = this.state;
    const filteredRobbots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(robots.length === 0){
      return <h1>Loading</h1>
    } else{
    return (
      <div className='tc'>
      <h1>ROBOFRIENDS</h1>
        <div>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobbots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      </div>
      );
    } 
  }
}

export default App;
