import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/core/styles"
import Link from "next/link"
import { Box, Typography, Button } from "@material-ui/core"

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

export default function CtaButton() {
  const { root } = useStyle();
  return (
    <Box className={root}>
      <Link href="/about">
        <Button
          color="primary"
          size="large"
          variant="contained"
        >
          今すぐ始める
        </Button>
      </Link>
    </Box>
  )
}
