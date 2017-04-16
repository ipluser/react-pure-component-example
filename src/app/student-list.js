import React from 'react'

import Student from './student'

import { wrapCountComponent } from '../logger'

const StudentList = ({ parentIndex, items }) => (
  <div className="student-list">
    {items && items.map((item, index) => (
      <Student
        key={index}
        parentIndex={parentIndex}
        index={index}
        {...item}
      />
    ))}
  </div>
)

export default wrapCountComponent('StudentList')(StudentList)
