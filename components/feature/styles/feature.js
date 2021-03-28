import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 10rem 2.8rem;
`

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 3.15rem;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.6rem;
  font-weight: normal;
  margin: 1rem auto;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`
