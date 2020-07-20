import Link from "next/link"
import { Box, Typography, Button } from "@material-ui/core"

export default function CtaButton({ children }) {
  return (
    <Box>
      <Link href="/signup">
        <Button
          color="primary"
          size="large"
          variant="contained"
        >
          {children}
        </Button>
      </Link>
    </Box>
  )
}
