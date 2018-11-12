import React, {Component} from 'react';
import './Main.css';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import {connect} from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'

const TodoBanner = () =>
  <h3 className='todo__banner'>
    TODO List
  </h3>;

class Main extends Component {
  constructor() {
    super()

    this.state = {
      items: [
      'Наладить добавление новых задач в TODO List',
      'Предотвратить добавление пустых элементов',
      'Перенести фокус на поле ввода новой задачи при старте приложения. И переносить фокус туда же при добавлении каждой новой задачи в список'
      ]
    }
  }

  addNewItems = (itemName) => {
    const {items} = this.state

    if ((itemName.trim()) !== '') {
      this.setState({items: items.concat(itemName)});
    }
  }

  render() {
     const { user, page } = this.props
    return (
      <div className='todo'>
      <TodoBanner/>
      <div className="App">
        <TodoList
          items={this.state.items}/>
        <TodoForm
          addItems={this.addNewItems}/>
      </div>
      <div>
      <User name={user.name} />
      <Page year={page.year} />
        </div>
    </div>);
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

export default connect(mapStateToProps)(Main)
