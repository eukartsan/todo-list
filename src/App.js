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

class TodoForm extends React.PureComponent {
  state = {};

  handleSubmit (event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({
      item: ''
    });

    return false;
  }

  onChange (event) {
    this.setState({
      item: event.target.value
    });
  }

  render () {
    return (
      <form className='todo__form'
        onSubmit={this.handleSubmit}>
        <input
          className='todo__form-input'
          type='text'
          onChange={this.onChange}
          value={this.state.item} />
        <input
          className='todo__form-add'
          type='submit'
          value='Add'/>
      </form>
    );
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

  updateItems (newItem) {
    this.setState({
      items: this.state.items.concat(newItem)
    });
  }


  render() {
    return (
      <div className='todo'>
        <TodoBanner/>
        <div className="App">
          <TodoList items={this.state.items}/>
          <TodoForm onFormSubmit={this.updateItems}/>
        </div>
      </div>
    );
  }
}

export default App;
