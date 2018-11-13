import React from 'react'
import PropTypes from 'prop-types'

export class TodoList extends React.Component {
  render() {
    const { items } = this.props
    return (
      <div>
        <ol>
          <li>{items}</li>
        </ol>
      </div>
    )
  }
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
}
