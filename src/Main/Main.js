import React, {Component} from 'react';
import './Main.css';
//import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import {connect} from 'react-redux'
import {User} from '../components/User'
import {Page} from '../components/Page'
import {TodoList} from '../components/TodoList'
import {setYear} from '../actions/PageActions'

const TodoBanner = () =>
    <h3 className='todo__banner'>
        TODO List
    </h3>;

class Main extends Component {
  /*    constructor() {
        super()

    }

  addNewItems = (itemName) => {
        const {items} = this.state

        if ((itemName.trim()) !== '') {
            this.setState({items: items.concat(itemName)});
        }
    }*/

    render() {
        const {user, page, setYearAction, items} = this.props
        return (
            <div className='todo'>
                <TodoBanner/>
                <div className="App">
                    {/*<TodoList
                        items={this.state.items}
                        />*/}
                        <TodoList items={items.items}/>
                    <TodoForm
                        addItems={this.addNewItems}/>
                </div>
                <div>
                    <User name={user.name}/>
                    <Page
                    year={page.year}
                    isFetching={page.isFetching}
                    setYear={setYearAction}
                    item={page.items}/>
                </div>
            </div>);
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page,
        items: store.items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setYearAction: year => dispatch(setYear(year)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
