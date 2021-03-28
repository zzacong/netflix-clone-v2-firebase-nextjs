import Head from 'next/head'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix | Nextjs</title>
      </Head>

      <JumbotronContainer />
      <FooterContainer />
    </div>
  )
}
