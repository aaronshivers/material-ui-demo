import React from 'react'
import { render } from 'react-dom'
import { Button } from '@material-ui/core'

const App = () => (
  <div>
    <p>Howdy</p>
    <Button
      variant="contained"
      color="primary"
    >
      Hello there.
    </Button>
  </div>
)

render(<App />, document.getElementById('app'))
