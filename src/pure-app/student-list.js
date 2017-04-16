import React, { PureComponent } from 'react'

import Student from './student'

import { countComponent } from '../logger'

class StudentList extends PureComponent {
  render() {
    countComponent('StudentList', true)

    const {
      parentIndex,
      items,
    } = this.props

    return (
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
  }
}

export default StudentList
