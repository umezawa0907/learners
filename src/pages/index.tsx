import Link from 'next/link'
import { Typography, Container, Box, Paper, Grid } from '@material-ui/core';
import MainVisual from "../components/organisms/MainVisual"
import Features from '../components/organisms/Features';
import CardSingleColumn from '../components/organisms/CardSingleColumn';
import CardTwoColumn from '../components/organisms/CardTwoColumn';
import Message from "../components/organisms/Message"
import CtaSection from "../components/organisms/CtaSection"

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
      <CtaSection />
    </Container >
  )
}
