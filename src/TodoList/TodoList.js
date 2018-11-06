import React, { Component } from 'react';

const TodoListItem = ({children}) =>
        <li className='todo__item'>
          {children}
        </li>;

export default class TodoList extends React.Component {
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
