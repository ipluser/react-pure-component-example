import React from 'react'

import { wrapCountComponent } from '../logger'

const Pair = ({ label, value }) => (
  <p className="pair">
    <span className="pair__label">{label} : </span>
    <span className="pair__value">{value}</span>
  </p>
)

export default wrapCountComponent('Pair')(Pair)
