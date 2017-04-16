import React, { PureComponent } from 'react'

import Pair from './pair'

import { countComponent } from '../logger'

class Teacher extends PureComponent {
  render() {
    countComponent('Teacher', true)

    const {
      index,
      theme,
      name,
      workYears,
    } = this.props

    return (
      <div className="teacher">
        <div className="teacher__avatar-wrapper">
          <p className="teacher__avatar">
            <span className="teacher__index">{index}</span>
            <span className="teacher__theme">{theme}</span>
          </p>
        </div>
        <div className="teacher__profile">
          <Pair
            label="Teacher"
            value={name}
          />
          <Pair
            label="Years of Work"
            value={workYears}
          />
        </div>
      </div>
    )
  }
}

export default Teacher
