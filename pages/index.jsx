import Head from 'next/head'
import { HeaderContainer } from '../containers/HeaderContainer'
import { JumbotronContainer } from '../containers/JumbotronContainer'
import { FooterContainer } from '../containers/FooterContainer'
import { FaqsContainer } from '../containers/FaqsContainer'
import { Feature, OptForm } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix | Nextjs</title>
      </Head>

      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  )
}
