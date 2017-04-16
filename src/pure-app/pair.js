import React, { PureComponent } from 'react'

import { countComponent } from '../logger'

class Pair extends PureComponent {
  render() {
    countComponent('Pair', true)

    const {
      label,
      value,
    } = this.props

    return  (
      <p className="pair">
        <span className="pair__label">{label} : </span>
        <span className="pair__value">{value}</span>
      </p>
    )
  }
}

export default Pair
