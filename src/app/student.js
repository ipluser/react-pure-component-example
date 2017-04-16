import React  from 'react'

import Pair from './pair'

import { wrapCountComponent } from '../logger'

const Student = (props) => {
  const {
    parentIndex,
    index,
    name,
    age,
    gender,
  } = props

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

export default wrapCountComponent('Student')(Student)
