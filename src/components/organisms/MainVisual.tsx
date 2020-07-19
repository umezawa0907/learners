import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Button } from "@material-ui/core"
import CtaButton from "../atoms/CtaButton"

const useStyle = makeStyles((theme: Theme) => ({
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
    fontWeight: "bold"
  }
}));

export default function MainVisual() {
  const {
    root,
    catchcopy,
    ...classes
  } = useStyle();
  return (
    <Box className={root}>
      <Typography className={catchcopy} color="primary" variant="h3" component="h1">
        マーケティング学ぶなら<br />Learners
      </Typography>
      <CtaButton />
    </Box>
  )
}
