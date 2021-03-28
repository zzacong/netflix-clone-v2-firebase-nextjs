import Head from 'next/head'
import { JumbotronContainer } from '../containers/jumbotron'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix | Nextjs</title>
      </Head>

      <JumbotronContainer />
    </div>
  )
}
