import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  contain: {
    objectFit: "contain",
    maxWidth: "100%"
  },
  titleStyle: {
    fontWeight: "bold",
    marginTop: theme.spacing(4)
  },
  descriptionStyle: {
    lineHeight: "1.75em",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8)
  }
}));

export interface SectionCardProps {
  title: string;
  description: string;
}

const SectionCard: React.FC<SectionCardProps> = props => {
  const classes = useStyles();
  return (
    <Box textAlign="center">
      <img className={classes.contain} src="/slide_image.jpg" />
      <Typography className={classes.titleStyle} color="primary" variant="h5" component="h3">
        {props.title}
      </Typography>
      <Container maxWidth="sm">
        <Typography className={classes.descriptionStyle} color="textPrimary" component="p">
          {props.description}
        </Typography>
      </Container>
    </Box>
  )
}

export default SectionCard;
