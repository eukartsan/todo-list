import React from 'react'
import PropTypes from 'prop-types'

export class TodoList extends React.Component {
  render() {
    const { items } = this.props
    return (
      <div>
        <ul>
          <li>{items}</li>
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
}
