import { NextPage } from 'next'
import { Container } from '@material-ui/core'
import Header from '../components/organisms/Header'
import MainVisual from '../components/organisms/MainVisual'
import Features from '../components/organisms/Features'
import CardSingleColumn from '../components/organisms/CardSingleColumn'
import Price from '../components/organisms/Price'
import Message from '../components/organisms/Message'
import CtaSection from '../components/organisms/CtaSection'
import Footer from '../components/organisms/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <MainVisual>
          マーケティング学ぶなら<br />Learners
      </MainVisual>
        <Features
          heading="初心者からマーケターに"
          firsttitle="イラスト中心のスライドで学ぶ"
          firstdescription="紙の本よりも直感的で、動画よりも学びやすい、「スライド学習」を採用しました。
        自分のペースで学習できること、復習しやすいことが強みです。"
          secondtitle="すぐに確認"
          seconddescription="確認テストを挟みながら学ぶから、使えるスキルが身につきます。
        ブラウザ上でテストを行って結果を確認。マーケティングの知識が身についているか確認できます。"
          thirdtitle="道のりに沿って学ぶ"
          thirddescription="「売れる人」になるために必要なレッスンを最適な順番で学ぶことができます。
        最終的には自分自身でプロダクトを企画して、目標に向かって自ら走りきる能力が身につきます。"
        />
        <div>
          <CardSingleColumn
            title="あなたに合ったレッスンがきっと見つかる"
            description="全15コース・79レッスン"
          />
          <Price />
          <Message>
            初心者でも独学でも、実践的な知識が学べること。<br />
          そして、本物のスキルが身につき「売れる」ようになること。<br /><br />
          プログラミングで夢を叶えたい人が、本当に夢を叶えられるように、<br />
          私たちはこんな思いをlearnersに込めています。<br /><br />
          マーケティングの世界へ踏み出すあなたを、私たちがサポートします。
          </Message>
        </div>
      </Container >
      <CtaSection />
      <Footer />
    </>
  )
}

export default Home;
