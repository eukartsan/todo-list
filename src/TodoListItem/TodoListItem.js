import React from 'react';

export default class TodoListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            isItemDone: false
        };
    }

    onItemDone = () => {
      this.setState(({isItemDone}) => ({isItemDone: !isItemDone}));
    }

    render() {
        const {children} = this.props;

        let className = 'todo__item';
        if (this.state.isItemDone === true) {
            className += ' through';
        }

        return (
            <li className={className} onClick={this.onItemDone}>
                {children}
            </li>
        )
    }
}
