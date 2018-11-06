import React, { Component } from 'react';

export default class TodoForm extends React.Component {
  constructor() {
      super()

      this.state = {
          itemName: '',
      };
  }

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

  addAccountName = (event) => {
  const {addAccount} = this.props,
        {itemName} = this.state;
    event.preventDefault();
    addAccount(itemName)
    this.setState({
        itemName: ''
    })
}

  handleChange = (event) => {
    this.setState({
        itemName: event.target.value
    });
  }

  render () {
    const {itemName} = this.state

    return (
      <div>
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
      <form onSubmit={this.addAccountName}>
        <label>
            <input
            name="newAccountName"
            type="text"
            value={itemName}
            onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Add"/>
      </form>
      </div>
    );
  }
}
