import React, { Component } from 'react';
import './Main.css';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

const TodoBanner = () =>
        <h3 className='todo__banner'>TODO List</h3>;

export default class Main extends React.Component {
  constructor() {
      super()

  this.state = {
    items: [
      'Наладить добавление новых задач в TODO List',
      'Предотвратить добавление пустых элементов',
      'Перенести фокус на поле ввода новой задачи при старте приложения. И переносить фокус туда же при добавлении каждой новой задачи в список',
    ]}}

    addAccount = (itemName) => {
        this.setState((prevState) => {
            const addNewItem = {
                itemName
            }

            return {
                items: [...prevState.items, addNewItem]
            };
        })
    }

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
          <TodoList
          items={this.state.items}
          />
          <TodoForm
          addAccount={this.addAccount}
          onFormSubmit={this.updateItems}
          />
        </div>
      </div>
    );
  }
}
