import { render } from '@testing-library/react'
import { Footer } from '../../components'

describe('<Footer />', () => {
  test('renders the <Footer /> with populated data', () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions? Contact Us</Footer.Title>

        <Footer.Break />

        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Coporate Information</Footer.Link>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Help Centre</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Media Centre</Footer.Link>
            <Footer.Link href="#">Buy Gift Cards</Footer.Link>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Column>
        </Footer.Row>

        <Footer.Break />

        <Footer.Text>Netflix Clone</Footer.Text>
      </Footer>
    )

    expect(getByText('Questions? Contact Us')).toBeTruthy()
    expect(getByText('FAQ')).toBeInTheDocument()
    expect(getByText('Investor Relations')).toBeInTheDocument()
    expect(getByText('Ways to Watch')).toBeInTheDocument()
    expect(getByText('Coporate Information')).toBeInTheDocument()
    expect(getByText('Netflix Originals')).toBeInTheDocument()
    expect(getByText('Help Centre')).toBeInTheDocument()
    expect(getByText('Jobs')).toBeInTheDocument()
    expect(getByText('Terms of Use')).toBeInTheDocument()
    expect(getByText('Contact Us')).toBeInTheDocument()
    expect(getByText('Account')).toBeInTheDocument()
    expect(getByText('Redeem Gift Cards')).toBeInTheDocument()
    expect(getByText('Privacy')).toBeInTheDocument()
    expect(getByText('Speed Test')).toBeInTheDocument()
    expect(getByText('Media Centre')).toBeInTheDocument()
    expect(getByText('Buy Gift Cards')).toBeInTheDocument()
    expect(getByText('Cookie Preferences')).toBeInTheDocument()
    expect(getByText('Legal Notices')).toBeInTheDocument()
    expect(getByText('Netflix Clone')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
