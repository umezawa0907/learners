import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import CtaButton from '../atoms/CtaButton'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    maxWidth: "100%",
    backgroundColor: "#f4f4f4"
  },
  titleStyle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(4)
  },
  descriptionStyle: {
    marginBottom: theme.spacing(4)
  }
}));

const CtaSection: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} textAlign="center">
      <Typography className={classes.titleStyle} color="primary" variant="h5" component="h2">
        さっそく始めよう
      </Typography>
      <Typography className={classes.descriptionStyle} variant="body1">
        １分後、マーケティングの世界でお会いしましょう。
      </Typography>
      <CtaButton>無料会員登録</CtaButton>
    </Box>
  )
}

export default CtaSection;
