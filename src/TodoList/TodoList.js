import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

export default class TodoList extends React.Component {
  createItem(itemText) {
    return (
      <TodoListItem>
          {itemText}
      </TodoListItem>);
  }

  render() {
    return (
      <ol
        className='todo__list'>
        {this.props.items.map(this.createItem)}
        </ol>)
  }
}
