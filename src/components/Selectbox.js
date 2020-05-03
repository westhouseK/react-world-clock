import React, { Component } from 'react'

class Selectbox extends Component {
  render() {
    const cities = [
      {timelag:'0',   name:'東京'},
      {timelag:'-1',  name:'シンガポール'},
      {timelag:'-7',  name:'ヘルシンキ'},
      {timelag:'-8',  name:'パリ'},
      {timelag:'-9',  name:'ロンドン'},
      {timelag:'-13', name:'ニューヨーク'},
      {timelag:'-16', name:'ロサンゼルス'}
    ]
    return (
      <select name='city' onChange={this.props.doChange}>
        {cities.map((city) => {
          return <option key={city.timelag} value={city.timelag}>{city.name}</option>
        })}
      </select>
    )
  }
}

export default Selectbox