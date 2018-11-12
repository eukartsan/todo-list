import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  render() {
    const { year } = this.props
    return (
      <div>
        <p>У тебя {year} год</p>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
}
