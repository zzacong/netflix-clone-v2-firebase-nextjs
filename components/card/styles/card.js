import styled, { css } from 'styled-components/macro'

const Title = styled.p`
  font-size: 1.5rem;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 3.5rem;
  margin-right: 3.5rem;
  margin-top: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -100px;
    }
  }
`

const Subtitle = styled.p`
  font-size: 0.75rem;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`

const Text = styled.p`
  margin-top: 5px;
  font-size: 0.6rem;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`

const Entities = styled.div`
  display: flex;
  flex-direction: row;
`

const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`

const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  &:hover ${Image} {
    border-radius: 4px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${Subtitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 3.5rem;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 3.5rem;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`

const FeatureText = styled.p`
  font-size: 1rem;
  color: white;
  font-weight: ${({ fontWeight }) =>
    fontWeight === 'bold' ? 'bold' : 'normal'};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`

const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 1.25rem;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 0.8rem;
    }
  }
`

const FeatureTitle = styled(Title)`
  margin-left: 0;
`

const FeatureClose = styled.button`
  color: white;
  background-color: #181818;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 2.3rem;
  height: 2.3rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const Content = styled.div`
  margin: 3.5rem;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`

const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 0.75rem;
`

export {
  Title,
  Container,
  Group,
  Subtitle,
  Text,
  Entities,
  Meta,
  Image,
  Item,
  FeatureText,
  Feature,
  FeatureTitle,
  FeatureClose,
  Content,
  Maturity,
}
