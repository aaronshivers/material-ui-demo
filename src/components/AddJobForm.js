import React, { Component } from 'react'
import moment from 'moment'
import { TextField, Button } from '@material-ui/core'

export default class AddJob extends Component {

  handleAddJob = event => {
    event.preventDefault()

    const { jobName, clockIn, clockOut } = event.target.elements

    this.props.handleAddJob({
      jobName: jobName.value,
      clockIn: clockIn.value,
      clockOut: clockOut.value })
  }

  render() {
    return (
      <form onSubmit={ this.handleAddJob }>
        <TextField
          name="jobName"
          label="Job Name"
          margin="normal"
        >
        </TextField>
        <TextField
          name="clockIn"
          label="Clock In"
          type="datetime-local"
          defaultValue={ moment().format('YYYY-MM-DDThh:mm') }
          InputLabelProps={ { shrink: true } }
          margin="normal"
        >
        </TextField>
        <TextField
          name="clockOut"
          label="Clock Out"
          type="datetime-local"
          defaultValue={ moment().add(1, 'hours').format('YYYY-MM-DDThh:mm') }
          InputLabelProps={ { shrink: true } }
          margin="normal"
        >
        </TextField>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Job
        </Button>
      </form>
    )
  }
}