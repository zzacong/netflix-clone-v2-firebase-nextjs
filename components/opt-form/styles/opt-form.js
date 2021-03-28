import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

const Input = styled.input`
  max-width: 400px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 45px;
  box-sizing: border-box;
`

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 45px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 1.4rem;
  font-size: 1rem;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  svg {
    margin-left: 0.5rem;
    font-size: 1.4rem;
  }

  @media (max-width: 1000px) {
    height: 45px;
    font-size: 1rem;
    margin-top: 20px;
    font-weight: bold;
  }
`

const Text = styled.p`
  font-size: 1rem;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    line-height: 22px;
  }
`

export { Container, Input, Break, Button, Text }
