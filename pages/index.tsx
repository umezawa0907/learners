import Link from 'next/link'
import MainVisual from "../components/MainVisual"
import { Typography, Container, Box, Paper, Grid } from '@material-ui/core';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <MainVisual />
      <div>
        <Typography variant="h3" component="h2">
          <Box textAlign="center" m={4}>
            初心者から、売れる人に
          </Box>
        </Typography>
        <Box textAlign="center" m={1}>
          <Typography variant="h4" component="h3">
            <Box m={4}>
              イラスト中心のスライドで学ぶ
            </Box>
          </Typography>
          <Typography component="p">
            紙の本よりも直感的で、動画より学びやすい、「スライド学習」を採用しました。<br />
              自分のペースで学習できること、復習しやすいことが強みです。
          </Typography>
        </Box>
        <Box textAlign="center" m={1}>
          <Typography variant="h4" component="h3">
            <Box m={4}>
              すぐに確認
            </Box>
          </Typography>
          <Typography component="p">
            確認テストを挟みながら学ぶから、使えるスキルが身につきます。<br />
            ブラウザ上でテストを行って結果を確認。マーケティングの知識が身についているか確認できます。
          </Typography>
        </Box>
        <Box textAlign="center" m={1}>
          <Typography variant="h4" component="h3">
            <Box m={4}>
              道のりに沿って学ぶ
            </Box>
          </Typography>
          <Typography component="p">
            「売れる人」になるために必要なレッスンを最適な順番で学ぶことができます。<br />
            最終的には自分自身でプロダクトを企画して、目標に向かって自ら走りきる能力が身につきます。
          </Typography>
        </Box>
      </div>
      <div>
        <Paper>
          <Box m={1} p={10}>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item xs>
                <Typography variant="h4" component="h2">
                  あなたに合ったレッスンがきっと見つかる
                </Typography>
                <Typography component="p">全15コース・79レッスン</Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs>
            <Paper>
              <Box textAlign="center" m={1} p={10}>
                <Typography variant="h4" component="h2">
                  無料会員
              </Typography>
                <Typography component="p">
                  マーケティングに触れ「基礎」を身につける
              </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper>
              <Box textAlign="center" m={1} p={10}>
                <Typography variant="h4" component="h2">
                  有料会員
              </Typography>
                <Typography component="p">
                  学習コミュニティへの参加
              </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Paper>
          <Box textAlign="center" m={1} p={10}>
            <Typography variant="h4" component="h2">
              初心者から売れる人を生み出す
          </Typography>
            <Typography component="p">
              初心者でも独学でも、実践的な知識が学べること。<br />
              そして、本物のスキルが身につき「売れる」ようになること。<br /><br />
              プログラミングで夢を叶えたい人が、本当に夢を叶えられるように、<br />
              私たちはこんな思いをlearnersに込めています。<br /><br />
              マーケティングの世界へ踏み出すあなたを、私たちがサポートします。
          </Typography>
          </Box>
        </Paper>
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
