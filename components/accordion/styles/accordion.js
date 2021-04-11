import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`

const Frame = styled.div`
  margin-bottom: 40px;
`

const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
`

const Title = styled.h2`
  font-size: 2.5rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

const Item = styled.section`
  color: white;
  margin: auto;
  margin-bottom: 10px;
  max-width: 650px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 1.3rem;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1em;
  user-select: none;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

const Body = styled.article`
  font-size: 1rem;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);

  &.closed {
    opacity: 0;
    max-height: 0;
  }

  &.open {
    max-height: 1200px;
  }

  span {
    display: block;
    padding: 1.2em 2.2em 2em 1.2em;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`

export { Container, Frame, Inner, Title, Item, Header, Body }
