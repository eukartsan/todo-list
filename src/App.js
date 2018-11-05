import React, { Component } from 'react';
import './App.css';

class TodoList extends React.PureComponent {
  createItem (itemText) {
    return (
      <TodoListItem>{itemText}</TodoListItem>
    );
  }

  render () {
    return (
      <ol className='todo__list'>
        {this.props.items.map(this.createItem)}
      </ol>
    )
  }
}

const TodoBanner = () =>
        <h3 className='todo__banner'>TODO List</h3>;

const TodoListItem = ({children}) =>
        <li className='todo__item'>
          {children}
        </li>;

class App extends Component {
state = {
  items: [
    'Наладить добавление новых задач в TODO List',
    'Предотвратить добавление пустых элементов',
    'Перенести фокус на поле ввода новой задачи при старте приложения. И переносить фокус туда же при добавлении каждой новой задачи в список',
  ]};


  render() {
    return (
      <div className='todo'>
        <TodoBanner/>
        <div className="App">
          <TodoList items={this.state.items}/>
        </div>
      </div>
    );
  }
}

export default App;
