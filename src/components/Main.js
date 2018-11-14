import React from 'react'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import TodoBanner from './TodoBanner'
import VisibleTodoList from '../containers/VisibleTodoList'
import './Main.css';

const Main = () => (
  <div className='todo'>
    <TodoBanner/>
    <VisibleTodoList />
    <AddTodo />
    <Footer />
  </div>
)

export default Main
