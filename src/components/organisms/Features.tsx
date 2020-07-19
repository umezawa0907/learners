import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import SectionHeading from "../atoms/SectionHeading"
import SectionCard from "../molecules/SectionCard"

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(10)
  }
}));

export default function Features({
  heading,
  firsttitle,
  firstdescription,
  secondtitle,
  seconddescription,
  thirdtitle,
  thirddescription
}) {
  const { root } = useStyle();
  return (
    <Box className={root}>
      <SectionHeading tag="h2" >{heading}</SectionHeading>
      <SectionCard
        title={firsttitle}
        description={firstdescription}
      />
      <SectionCard
        title={secondtitle}
        description={seconddescription}
      />
      <SectionCard
        title={thirdtitle}
        description={thirddescription}
      />
    </Box>
  )
}
