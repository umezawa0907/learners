import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardLeft: {
    height: "100%",
    backgroundColor: "#f0f4f9",
  },
  cardRight: {
    height: "100%",
    backgroundColor: "#f7edad"
  },
  titleStyle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2)
  }
}));

const CardOneColumn: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box className={classes.cardLeft}>
            <Box textAlign="center" p={10}>
              <Typography className={classes.titleStyle} color="primary" variant="h5" component="h2">
                無料会員
              </Typography>
              <Typography component="p">
                マーケティングに触れ「基礎」を身につける
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.cardRight}>
            <Box textAlign="center" p={10}>
              <Typography className={classes.titleStyle} color="primary" variant="h5" component="h2">
                有料会員
              </Typography>
              <Typography component="p">
                学習コミュニティへの参加
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardOneColumn;
