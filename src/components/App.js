import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import AddJobForm from './AddJobForm'
import Jobs from './Jobs'

export default class App extends Component {
  state = {
    jobs: []
  }

  handleAddJob = ({ jobName, clockIn, clockOut }) => {
    const job = { jobName, clockIn, clockOut }

    this.setState(prevState => ({
      jobs: prevState.jobs.concat(job)
    }))
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('jobs')
      const jobs = JSON.parse(json)

      if (jobs) {
        this.setState(() => ({ jobs }))
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.jobs.length !== this.state.jobs.length) {
      const jobs = JSON.stringify(this.state.jobs)
      localStorage.setItem('jobs', jobs)
    }
  }

  render() {
    return (
      <Container maxWidth="sm">
        <p>Job Tracker</p>
        <AddJobForm
          handleAddJob={ this.handleAddJob }
        />
        <Jobs jobs={ this.state.jobs } />
      </Container>
    )
  }
}
