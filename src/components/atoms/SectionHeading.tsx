import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"

const useStyle = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: "bold",
    marginBottom: theme.spacing(8)
  }
}));

export default function SectionHeading({ children, tag }) {
  const { heading } = useStyle();
  return (
    <>
      <Typography className={heading} color="primary" variant="h3" component={tag}>
        <Box textAlign="center">
          {children}
        </Box>
      </Typography>
    </>
  )
}
