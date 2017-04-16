import React, { Component } from 'react'

import Subject from './subject'

import store from '../store'
import { countComponent } from '../logger'

class App extends Component {
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
    countComponent('App')

    const {
      subjects,
    } = this.state

    return (
      <div className="app">
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

export default App
