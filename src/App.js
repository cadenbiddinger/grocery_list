import React, { Component } from 'react'; 
import List from './List'; 
import GroceryForm from './GroceryForm';
import Footer from './footer';

class App extends Component {
  state = { groceries: [], filter: 'All' }

  setFilter = (filter) => {
    this.setState({ filter })
  }
   
  getUniqId = () => {
    return Math.floor((1 + Math.random()) * ox10000)
    .toString(16)
    .substring(1);
  }


addItem = (name) => {
  const { groceries } = this.state;
  const grocery = { name, id: this.getUniqId() , complete: false } 
  this.setState({ groceries: [grocery, ...groceries] });
}

handleClick = (id) => {
  const { grocerys } = this.state;
  this.setState({
    groceries: groceries.map( grocery => {
      if (grocery.id === id) {
        return {
          ...grocery, 
          complete: !grocery.complete
        }
      }
      return grocery
    })
  })
}

visibleItems = () => {
  const { groceries, filter } = this.state;
  switch(filter) {
    case 'Active':
      return groceries.filter( t => !t.complete )
    case 'Complete': 
    return groceries.filter( t => t.complete )
      return groceries;
  }
}

  render() {
    const { grocery, filter } = this.state;
    
    return (
      <div>
    
      <GroceryForm addItem={this.addItem} />
      <list name= "Grocery List" items={this.visibleItems()} groceryClick={this.handleClick} />
      </div>
    );
  }
}
export default App;
