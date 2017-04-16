import React from 'react'

import Teacher from './teacher'
import StudentList from './student-list'

import { wrapCountComponent } from '../logger'

const Subject = ({ index, theme, teacher, students }) => (
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

export default wrapCountComponent('Subject')(Subject)
