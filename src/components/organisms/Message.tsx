import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"

const useStyle = makeStyles((theme: Theme) => ({
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

export default function Message({ children }) {
  const { root, titleStyle } = useStyle();
  return (
    <Box className={root} textAlign="center">
      <Typography className={titleStyle} color="primary" variant="h5" component="h2">
        初心者から、マーケターを生み出す
      </Typography>
      <Typography>
        {children}
      </Typography>
    </Box>
  )
}
