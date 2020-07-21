import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f0f4f9",
    marginBottom: theme.spacing(4)
  },
  textArea: {
    padding: theme.spacing(10)
  },
  titleStyle: {
    fontWeight: "bold",
    lineHeight: "1.7em",
    marginBottom: theme.spacing(2)
  }
}));

export interface CardOneColumnProps {
  title: string;
  description: string;
}

const CardOneColumn: React.FC<CardOneColumnProps> = props => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={12} md={5}>
        </Grid>
        <Grid item sm={12} md={7}>
          <Box className={classes.textArea} >
            <Typography className={classes.titleStyle} color="primary" variant="h4" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body1" component="p">
              {props.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardOneColumn;
