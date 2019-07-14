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

const Job = props => {
  const { jobName, clockIn, clockOut } = props.job
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div>
      <ListItem button onClick={ handleClick }>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={ jobName } />
        { open ? <ExpandLess /> : <ExpandMore /> }
      </ListItem>
      <Collapse in={ !open } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={ clockIn } />
          </ListItem>
        </List>
      </Collapse>
    </div>
  )
}

export default Job
