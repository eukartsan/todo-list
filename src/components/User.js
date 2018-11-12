import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  render() {
    const { name } = this.props
    return (
      <div>
        <p>
        <p>Тебя зовут {name}!</p>
        </p>
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
}
