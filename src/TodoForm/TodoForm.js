import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            itemName: ''
        };
    }

    addNewItem = (event) => {
        const {addItems} = this.props,
            {itemName} = this.state;

        event.preventDefault();
        addItems(itemName)
        this.setState({
            itemName: ''
        });
    }

    handleChange = (event) => {
        this.setState({itemName: event.target.value});
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    componentDidUpdate() {
        this.nameInput.focus();
    }

    render() {
        const {itemName} = this.state;

        return (
            <form onSubmit={this.addNewItem} className='todo__form'>
                <input className='todo__form-input'
                       name="newAccountName"
                       type="text"
                       value={itemName}
                       ref={(input) => {this.nameInput = input;
                       }}
                       onChange={this.handleChange}/>
                <input
                    className='todo__form-add'
                    type="submit"
                    value="Add"/>
            </form>
        );
    }
}
