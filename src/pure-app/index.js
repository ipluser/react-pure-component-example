import React, { PureComponent } from 'react'

import Subject from './subject'

import store from '../store'
import { countComponent } from '../logger'

class PureApp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      subjects: store.getState().subjects,
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const subjects = store.getState().subjects

      if (this.state.subjects !== subjects) {
        this.setState({ subjects })
      }
    })
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
      this.unsubscribe = undefined
    }
  }

  render() {
    countComponent('App', true)

    const {
      subjects,
    } = this.state

    return (
      <div className="pure-app">
        {subjects && subjects.map((subject, index) => (
          <Subject
            key={index}
            index={index}
            {...subject}
          />
        ))}
      </div>
    )
  }
}

export default PureApp
