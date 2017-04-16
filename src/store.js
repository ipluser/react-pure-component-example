import { createStore } from 'redux'

import { appendToProduce } from './logger'

const random = (min, max = 0) => {
  let finalMin = Math.abs(min)
  let finalMax = Math.abs(max)

  if (!max) {
    finalMax = finalMin
    finalMin = 0
  }

  return Math.floor(Math.random() * (finalMax - finalMin + 1)) + finalMin
}

const isTruly = () => Boolean(random(0, 2) !== 0)

const randomString = (count) => {
  let str = ''

  for (let i = 0; i < count; i++) {
    str += String.fromCharCode(random(65, 90))
  }

  return str
}

const newTheme = () => randomString(2)

const newName = () => `
  ${randomString(1)}${randomString(2).toLowerCase()}
  ${randomString(1)}${randomString(3).toLowerCase()}
`

const newWorkYears = () => random(3, 10)

const newAge = () => random(10, 20)

const newTeacher = () => ({
  name: newName(),
  workYears: newWorkYears(),
})

const newStudent = () => ({
  name: newName(),
  age: newAge(),
  gender: isTruly() ? 'B' : 'G',
})

const newSubject = () => {
  const len = random(4)
  const students = []

  for (let i = 0; i < len; i += 1) {
    students.push(newStudent())
  }

  return {
    theme: newTheme(),
    teacher: newTeacher(),
    students,
  }
}

const changeStudent = (state) => {
  const {
    subjects,
  } = state

  let subjectIndex
  let subject
  let studentsLen

  while (!studentsLen) {
    subjectIndex = random(subjects.length - 1)
    subject = subjects[subjectIndex]

    studentsLen = subject.students.length
  }

  const studentIndex = random(studentsLen - 1)
  const students = subject.students
  const student = students[studentIndex]

  const nameHasChanged = isTruly()
  const nextName = newName()
  const nextAge = newAge()

  const {
    name,
    age,
  } = student

  students[studentIndex] = {
    ...student,
    name: nameHasChanged ? nextName : name,
    age: !nameHasChanged ? nextAge : age,
  }

  subjects[subjectIndex] = {
    ...subject,
    students: students.slice(),
  }

  appendToProduce(
    'Change:',
    `the subject[${subjectIndex}].students[${studentIndex}],`,
    `the ${nameHasChanged ? 'name' : 'age'}:`,
    `${nameHasChanged ? name : age} ->`,
    `${nameHasChanged ? nextName : nextAge}`
  )

  return {
    ...state,
    subjects: subjects.slice(),
  }
}

const changeTeacher = (state) => {
  const {
    subjects,
  } = state

  if (!isTruly()) {
    const index = random(subjects.length - 1)
    const subject = subjects[index]
    const teacher = subject.teacher

    const nameHasChanged = isTruly()
    const nextName = newName()
    const nextWorkYears = newWorkYears()

    const {
      name,
      workYears,
    } = teacher

    subjects[index] = {
      ...subject,
      teacher: {
        ...teacher,
        name: nameHasChanged ? nextName : name,
        workYears: !nameHasChanged ? nextWorkYears : workYears,
      },
    }

    appendToProduce(
      'Change:',
      `the subject[${index}].teacher,`,
      `the ${nameHasChanged ? 'name' : 'workYears'}:`,
      `${nameHasChanged ? name : workYears} ->`,
      `${nameHasChanged ? nextName : nextWorkYears}`
    )

    return {
      ...state,
      subjects: subjects.slice(),
    }
  }

  return changeStudent(state)
}

const changeItem = (state) => {
  const {
    subjects,
  } = state

  const len = subjects.length

  if (!len) {
    return state
  }

  if (!isTruly()) {
    const index = random(len - 1)
    const subject = subjects[index]
    const theme = newTheme()

    subjects[index] = {
      ...subject,
      theme,
    }

    appendToProduce(
      'Change:',
      `the subject[${index}],`,
      `the theme: ${subject.theme} -> ${theme}`,
    )

    return {
      ...state,
      subjects: subjects.slice(),
    }
  }

  return changeTeacher(state)
}

const appendItem = (state) => {
  const len = random(1, 3)
  const subjects = []

  for (let i = 0; i < len; i += 1) {
    subjects.push(newSubject())
  }

  appendToProduce(`Append: ${len} subjects`)

  return {
    ...state,
    subjects: state.subjects.concat(subjects),
  }
}

const initState = appendItem({ subjects: [] })

const reducer = (state = initState, { type }) => {
  switch (type) {
    case 'produce':
      return isTruly() ? changeItem(state) : appendItem(state)
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
