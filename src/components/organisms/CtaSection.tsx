import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import CtaButton from "../atoms/CtaButton"

const useStyle = makeStyles((theme: Theme) => ({
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

export default function Features() {
  const { root, titleStyle, descriptionStyle } = useStyle();
  return (
    <Box className={root} textAlign="center">
      <Typography className={titleStyle} color="primary" variant="h5" component="h2">
        さっそく始めよう
      </Typography>
      <Typography className={descriptionStyle} variant="body1">
        １分後、マーケティングの世界でお会いしましょう。
      </Typography>
      <CtaButton />
    </Box>
  )
}
