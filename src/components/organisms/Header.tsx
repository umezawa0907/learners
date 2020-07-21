import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CtaButton from '../atoms/CtaButton'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titleStyle: {
    flexGrow: 1,
    fontWeight: "bold"
  }
}));

const ButtonAppBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography color="primary" variant="h6" className={classes.titleStyle}>
            Learners
          </Typography>
          <CtaButton>無料会員登録</CtaButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default ButtonAppBar;
