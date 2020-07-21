import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "bold",
    marginBottom: theme.spacing(8)
  }
}));

export interface SectionHeadingProps {
  children: React.ReactNode;
  tag: React.ElementType;
}

const SectionHeading: React.FC<SectionHeadingProps> = props => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.heading} color="primary" variant="h3" component={props.tag}>
        <Box textAlign="center">
          {props.children}
        </Box>
      </Typography>
    </>
  )
}

export default SectionHeading;
