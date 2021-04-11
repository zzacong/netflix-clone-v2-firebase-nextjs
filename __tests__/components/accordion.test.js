import { render, fireEvent, getDefaultNormalizer } from '@testing-library/react'
import { Accordion } from '../../components'
import faqData from '../../fixtures/faqs.json'

describe('<Accordion />', () => {
  test('renders the <Accordion /> with populated data', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Question</Accordion.Title>
        <Accordion.Frame>
          {faqData.map(item => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    )

    expect(getByText('Frequently Asked Question')).toBeInTheDocument()
    expect(getByText('What is Netflix?')).toBeInTheDocument()
    expect(getByText('How much does Netflix cost?')).toBeInTheDocument()
    expect(getByText('Where can I watch?')).toBeInTheDocument()
    expect(getByText('How do I cancel?')).toBeInTheDocument()
    expect(getByText('What can I watch on Netflix?')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

test('opens and closes the <Accordion /> component', () => {
  const { container, queryByText } = render(
    <Accordion>
      <Accordion.Title>Frequently Asked Question</Accordion.Title>
      <Accordion.Frame>
        {faqData.map(item => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
    </Accordion>
  )

  const whatIsNetflixBodyText = faqData.find(({ id }) => id === 1).body
  const fn = () =>
    queryByText(whatIsNetflixBodyText, {
      normalizer: getDefaultNormalizer({ collapseWhitespace: false }),
    })

  expect(fn()).not.toBeVisible()
  fireEvent.click(queryByText('What is Netflix?'))
  expect(fn()).toBeVisible()
  fireEvent.click(queryByText('What is Netflix?'))
  expect(fn()).not.toBeVisible()

  expect(container.firstChild).toMatchSnapshot()
})
