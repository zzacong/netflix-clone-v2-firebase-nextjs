import React, { useState, useContext, createContext } from 'react'
import capitalize from 'lodash.capitalize'
import { MdClose } from 'react-icons/md'
import {
  Container,
  Group,
  Title,
  Subtitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card'

export const FeatureContext = createContext()

export default function Card({ children, ...props }) {
  const [showFeature, setShowFeature] = useState(false)
  const [itemFeature, setItemFeature] = useState({})

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...props}>{children}</Container>
    </FeatureContext.Provider>
  )
}

Card.Group = ({ children, ...props }) => <Group {...props}>{children}</Group>

Card.Title = ({ children, ...props }) => <Title {...props}>{children}</Title>

Card.Subtitle = ({ children, ...props }) => (
  <Subtitle {...props}>{children}</Subtitle>
)

Card.Text = ({ children, ...props }) => <Text {...props}>{children}</Text>

Card.Entities = ({ children, ...props }) => (
  <Entities {...props}>{children}</Entities>
)

Card.Meta = ({ children, ...props }) => <Meta {...props}>{children}</Meta>

Card.Item = ({ item, children, ...props }) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext)

  return (
    <Item
      onClick={() => {
        setItemFeature(item)
        setShowFeature(true)
      }}
      {...props}
    >
      {children}
    </Item>
  )
}

Card.Image = ({ ...props }) => <Image {...props} />

Card.Feature = function CardFeature({ children, category, ...props }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  )

  if (!showFeature) return null

  return (
    <Feature
      {...props}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <MdClose />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {capitalize(itemFeature.genre)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  )
}
