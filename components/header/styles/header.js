import styled, { css } from 'styled-components/macro'

// prettier-ignore
const Background = styled.div`
  :root {
    --src: ${({ src }) =>
      src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'};
  }

  display: flex;
  flex-direction: column;
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
      url(
        ${ ({ src }) =>
        src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'});
  
  ${ ({ dontShowOnSmallViewPort }) =>
    dontShowOnSmallViewPort &&
    css`
      @media (max-width: 1100px) {
        background: none;
      }
    `}
`

const Container = styled.main`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`

const Link = styled.p`
  color: white;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Group = styled.div`
  display: flex;
  align-items: center;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.5s;

  @media (max-width: 700px) {
    display: none;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: rgba(0, 0, 0, 0.6);
      border: 1px solid white;
    `}
`

const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 2rem;
  width: 2rem;
  padding: 0;
  display: grid;
  place-items: center;

  svg {
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    stroke-width: 1.5px;
  }
`

const SearchInput = styled.input`
  background-color: transparent;
  color: white;
  outline: none;
  border: none;
  transition: width 0.5s;
  height: 2rem;
  font-size: 0.87rem;
  padding: ${({ active }) => (active ? '0 10px' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  width: ${({ active }) => (active ? '200px' : '0px')};
`

const ButtonLink = styled.a`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 1rem;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`

const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 7rem;
  top: 2rem;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link} {
      cursor: pointer;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 0.75rem;
    margin-bottom: 0;
    margin-top: 0;
  }
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`

const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`

const FeatureCallOut = styled.h2`
  color: white;
  font-size: 3rem;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`

const Text = styled.p`
  color: white;
  font-size: 1.3rem;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`

const FeatureButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
  height: 2.5rem;
  margin-right: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 0.5rem;
  }
`

const PlayButton = styled(FeatureButton)`
  background-color: white;
  color: black;
`

const InfoButton = styled(FeatureButton)`
  background-color: rgba(109, 109, 110, 0.7);
  color: white;

  svg {
    font-size: 1.5rem;
  }
`

export {
  Background,
  Container,
  Link,
  Group,
  SearchInput,
  Search,
  SearchIcon,
  ButtonLink,
  Picture,
  Dropdown,
  Profile,
  Feature,
  FeatureCallOut,
  Text,
  Logo,
  PlayButton,
  InfoButton,
}
