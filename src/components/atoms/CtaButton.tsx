import * as React from 'react'
import Link from 'next/link'
import { Box, Button } from '@material-ui/core'

export interface CtaButtonProps {
  children: React.ReactNode;
}

const CtaButton: React.FC<CtaButtonProps> = props => {
  return (
    <Box>
      <Link href="/signup">
        <Button
          color="primary"
          size="large"
          variant="contained"
        >
          {props.children}
        </Button>
      </Link>
    </Box>
  )
}

export default CtaButton;
