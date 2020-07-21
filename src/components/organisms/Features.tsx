import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import SectionHeading from '../atoms/SectionHeading'
import SectionCard from '../molecules/SectionCard'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(10)
  }
}));

export interface FeaturesProps {
  heading: string;
  firsttitle: string;
  firstdescription: string;
  secondtitle: string;
  seconddescription: string;
  thirdtitle: string;
  thirddescription: string;
}

const Features: React.FC<FeaturesProps> = props => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <SectionHeading tag="h2" >{props.heading}</SectionHeading>
      <SectionCard
        title={props.firsttitle}
        description={props.firstdescription}
      />
      <SectionCard
        title={props.secondtitle}
        description={props.seconddescription}
      />
      <SectionCard
        title={props.thirdtitle}
        description={props.thirddescription}
      />
    </Box>
  )
}

export default Features;
