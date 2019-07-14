import React, { Component, useState } from 'react'
import moment from 'moment'
import {
  List,
  ListItem,
  ListSubheader,
  Collapse,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  Edit,
  Delete,
  ExpandLess,
  ExpandMore
} from '@material-ui/icons'

const Job = props => {
  const { jobName, clockIn, clockOut } = props.job
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  const getHours = (clockIn, clockOut) => {
    const a = moment(clockIn)
    const b = moment(clockOut)
    return b.diff(a, 'hours', true)
  }

  return (
    <div>
      <ListItem button onClick={ handleClick }>
        <ListItemText
          primary={ jobName }
          secondary={ `Hours: ${ getHours(clockIn, clockOut) }` }
        />
        { open ? <ExpandLess /> : <ExpandMore /> }
      </ListItem>
      <Collapse in={ open } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Clock In" secondary={ moment(clockIn).format('MMM Do YY h:mm a') } />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Clock Out" secondary={ moment(clockOut).format('MMM Do YY h:mm a') } />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Edit />
            </ListItemIcon>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
          </ListItem>
        </List>
      </Collapse>
    </div>
  )
}

export default Job
