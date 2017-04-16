import React, { PureComponent }  from 'react'

import Pair from './pair'

import { countComponent } from '../logger'

class Student extends PureComponent {
  render() {
    countComponent('Student', true)

    const {
      parentIndex,
      index,
      name,
      age,
      gender,
    } = this.props

    return (
      <div className="student">
        <div className="student__avatar-wrapper">
          <p className="student__avatar">
            <span className="student__index">{parentIndex}.{index}</span>
            <span className="student__gender">{gender}</span>
          </p>
        </div>
        <div className="student__profile">
          <Pair
            label="Student"
            value={name}
          />
          <Pair
            label="Age"
            value={age}
          />
        </div>
      </div>
    )
  }
}

export default Student
