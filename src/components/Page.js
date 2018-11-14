import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = item => {
    const year = +item.currentTarget.innerText
    this.props.setYear(year)
  }

  render() {
    const { year, items, isFetching } = this.props
    return (
    <div>
      <div>
        <button onClick={this.onBtnClick}>2019</button>
        <button onClick={this.onBtnClick}>2018</button>
        <button onClick={this.onBtnClick}>2017</button>
      </div>
      <div>
        <p>У тебя {year} год</p>
        {isFetching ? <p>Добавление новыx элементов</p> : <p> {items.length} </p>}
      </div>
    </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}
