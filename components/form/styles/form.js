import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`

const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 0.8rem;
  margin: 0 0 1rem;
  color: white;
  padding: 15px 20px;
`

const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 28px;
`

const Text = styled.p`
  color: #737373;
  font-size: 1rem;
  font-weight: 500;
`

const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
  line-height: normal;
  color: #8c8c8c;
`

const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`

const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`

export { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit }
