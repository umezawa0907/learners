import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Grid } from "@material-ui/core"

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#f0f4f9",
    marginBottom: theme.spacing(4)
  },
  textArea: {
    paddingRight: theme.spacing(10),
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12)
  },
  titleStyle: {
    fontWeight: "bold",
    lineHeight: "1.7em",
    marginBottom: theme.spacing(2)
  }
}));

export default function CardOneColumn({ title, description }) {
  const { root, textArea, titleStyle } = useStyle();
  return (
    <Box className={root}>
      <Grid container spacing={4}>
        <Grid item xs>
        </Grid>
        <Grid item xs>
          <Box className={textArea} >
            <Typography className={titleStyle} color="primary" variant="h4" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" component="p">
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
