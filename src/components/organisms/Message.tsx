import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20)
  },
  titleStyle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(4)
  }
}))

export interface MessageProps {
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = props => {
  const classes = useStyles();
  return (
    <Box className={classes.root} textAlign="center">
      <Typography className={classes.titleStyle} color="primary" variant="h5" component="h2">
        初心者から、マーケターを生み出す
      </Typography>
      <Typography>
        {props.children}
      </Typography>
    </Box>
  )
}

export default Message;
