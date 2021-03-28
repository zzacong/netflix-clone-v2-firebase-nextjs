import Head from 'next/head'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix | Nextjs</title>
      </Head>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  )
}
