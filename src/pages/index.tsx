import Link from 'next/link'
import { Typography, Container, Box, Paper, Grid } from '@material-ui/core';
import MainVisual from "../components/organisms/MainVisual"
import Features from '../components/organisms/Features';
import CardSingleColumn from '../components/organisms/CardSingleColumn';
import CardTwoColumn from '../components/organisms/CardTwoColumn';
import Message from "../components/organisms/Message"

export default function Home() {
  return (
    <Container maxWidth="lg">
      <MainVisual />
      <Features />
      <div>
        <CardSingleColumn
          title="あなたに合ったレッスンがきっと見つかる"
          description="全15コース・79レッスン"
        />
        <CardTwoColumn />
        <Message>
          初心者でも独学でも、実践的な知識が学べること。<br />
          そして、本物のスキルが身につき「売れる」ようになること。<br /><br />
          プログラミングで夢を叶えたい人が、本当に夢を叶えられるように、<br />
          私たちはこんな思いをlearnersに込めています。<br /><br />
          マーケティングの世界へ踏み出すあなたを、私たちがサポートします。
          </Message>
      </div>
      <div>
        <Paper>
          <Box textAlign="center" m={1} p={10}>
            <Typography variant="h4" component="h2">
              さっそく始めよう
          </Typography>
            <Typography component="p">１分後、マーケティングの世界でお会いしましょう。</Typography>
            <Link href="/about"><a>無料会員登録</a></Link>
          </Box>
        </Paper>
      </div>
    </Container >
  )
}
