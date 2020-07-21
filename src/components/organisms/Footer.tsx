import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container
} from '@material-ui/core'

const Footer: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; 2020 Leaners
            </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer;
