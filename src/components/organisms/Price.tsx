import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Grid } from "@material-ui/core"

const useStyle = makeStyles((theme: Theme) => ({
  cardLeft: {
    height: "100%",
    backgroundColor: "#f0f4f9",
  },
  cardRight: {
    height: "100%",
    backgroundColor: "#f7edad"
  },
  cardContent: {
    padding: theme.spacing(10),

  },
  titleStyle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2)
  }
}));

export default function CardOneColumn({ title, description }) {
  const { cardLeft, cardRight, cardContent, titleStyle } = useStyle();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box className={cardLeft}>
            <Box textAlign="center" p={10}>
              <Typography className={titleStyle} color="primary" variant="h5" component="h2">
                無料会員
              </Typography>
              <Typography component="p">
                マーケティングに触れ「基礎」を身につける
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={cardRight}>
            <Box textAlign="center" p={10}>
              <Typography className={titleStyle} color="primary" variant="h5" component="h2">
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
