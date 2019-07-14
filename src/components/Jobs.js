import React, { Component, useState } from 'react'
import {
  List,
  ListItem,
  ListSubheader,
  Collapse,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  StarBorder,
  MoveToInbox as InboxIcon,
  ExpandLess,
  ExpandMore
} from '@material-ui/icons'
import Job from './Job'

const Jobs = props => {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  console.log(props.jobs)

  return (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Job List
        </ListSubheader>
      }
    >
      {
        props.jobs.map((job, i) => (
          <Job
            key={ i }
            job={ job }
          >
          </Job>
        ))
      }
    </List>
  )
}

export default Jobs
