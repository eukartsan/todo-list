import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.setYear(year)
  }

  render() {
    const { year } = this.props
    return (
    <div>
      <div>
        <button onClick={this.onBtnClick}>2019</button>
        <button onClick={this.onBtnClick}>2018</button>
        <button onClick={this.onBtnClick}>2017</button>
      </div>
      <div>
        <p>У тебя {year} год</p>
      </div>
    </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
}
