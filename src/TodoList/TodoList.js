import React from 'react';

onLabelClick = () => {
  console.log(`Done: ${children}`)
}

const TodoListItem = ({children}) =>
        <li
          className='todo__item'
          onClick={this.onLabelClick}
        >
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
