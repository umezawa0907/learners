import { Theme } from "@material-ui/core/styles/createMuiTheme"
import Link from 'next/link'
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"

const useStyle = makeStyles((theme: Theme) => ({
    root: {
        height: theme.typography.pxToRem(660),
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export default function MainVisual() {
    const {
        root,
        ...classes
    } = useStyle();
    return (
        <Box className={root}>
            <Box>
                <Typography variant="h2" component="h1">
                    マーケティング学ぶなら<br />learners
                </Typography>
                <Link href="/about"><a>今すぐ始める</a></Link>
            </Box>
        </Box>
    )
}
