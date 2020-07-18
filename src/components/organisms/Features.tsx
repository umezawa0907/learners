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

export default function Features() {
  const { root } = useStyle();
  return (
    <Box className={root}>
      <SectionHeading tag="h2" >初心者からマーケターに</SectionHeading>
      <SectionCard
        title="イラスト中心のスライドで学ぶ"
        description="紙の本よりも直感的で、動画よりも学びやすい、「スライド学習」を採用しました。
        自分のペースで学習できること、復習しやすいことが強みです。"
      />
      <SectionCard
        title="すぐに確認"
        description="確認テストを挟みながら学ぶから、使えるスキルが身につきます。
        ブラウザ上でテストを行って結果を確認。マーケティングの知識が身についているか確認できます。"
      />
      <SectionCard
        title="道のりに沿って学ぶ"
        description="「売れる人」になるために必要なレッスンを最適な順番で学ぶことができます。
        最終的には自分自身でプロダクトを企画して、目標に向かって自ら走りきる能力が身につきます。"
      />
    </Box>
  )
}
