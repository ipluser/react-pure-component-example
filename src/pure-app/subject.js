import React, { PureComponent } from 'react'

import Teacher from './teacher'
import StudentList from './student-list'

import { countComponent } from '../logger'

class Subject extends PureComponent {
  render() {
    countComponent('Subject', true)

    const {
      index,
      theme,
      teacher,
      students,
    } = this.props

    return (
      <div className="subject">
        <Teacher
          index={index}
          theme={theme}
          {...teacher}
        />
        <StudentList
          parentIndex={index}
          items={students}
        />
      </div>
    )
  }
}

export default Subject
