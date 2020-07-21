import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import CtaButton from '../atoms/CtaButton'

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.typography.pxToRem(660),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  catchcopy: {
    letterSpacing: "0.1em",
    fontWeight: "bold",
    marginBottom: theme.spacing(2)
  }
}));

export interface MainVisualProps {
  children: React.ReactNode;
}

const MainVisual: React.FC<MainVisualProps> = props => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.catchcopy} color="primary" variant="h3" component="h1">
        {props.children}
      </Typography>
      <CtaButton>今すぐ始める</CtaButton>
    </Box>
  )
}

export default MainVisual;
