import React, { Component} from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
      {
        id: 5,
        value: 0,
      },
    ],
  };
 
  constructor() {
    super();
    // Initialize states
    console.log('App - Constructor');
  }

  componentDidMount() {
    // Make API Calls
    console.log('App - Mounted');
  }

  handleReset=()=> {
     const counters = this.state.counters.map(counter => {
       counter.value = 0;
       return counter;
     });
     this.setState({ counters })
  }
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters})
  };
  // using arrow function is more simplier than addding custom constructor and rebinging all methods
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters })
  };

  render() { 
    console.log('App - Rendered');
    return ( 
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value> 0).length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
     );
  }
}

export default App;
