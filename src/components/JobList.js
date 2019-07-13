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

const JobList = props => {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Job List
        </ListSubheader>
      }
    >
      <ListItem button onClick={ handleClick }>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        { open ? <ExpandLess /> : <ExpandMore /> }
      </ListItem>
      <Collapse in={ open } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  )
}

export default JobList
