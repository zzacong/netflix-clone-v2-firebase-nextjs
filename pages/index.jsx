import Head from 'next/head'
import Jumbotron from '../components/jumbotron'
import jumboData from '../fixtures/jumbo.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix | Nextjs</title>
      </Head>

      <Jumbotron.Container>
        {jumboData.map(item => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subtitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  )
}
