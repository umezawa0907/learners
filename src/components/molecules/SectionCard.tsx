import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Container } from "@material-ui/core"

const useStyle = makeStyles((theme: Theme) => {
  return {
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
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(8),

    }
  }
});

export default function SectionCard({ title, description }) {
  const { contain, titleStyle, descriptionStyle } = useStyle();
  return (
    <Box textAlign="center" m={1}>
      <img className={contain} src="/slide_image.jpg" />
      <Typography className={titleStyle} color="primary" variant="h5" component="h3">
        {title}
      </Typography>
      <Container maxWidth="sm">
        <Typography className={descriptionStyle} color="textPrimary" component="p">
          {description}
        </Typography>
      </Container>
    </Box>
  )
}
