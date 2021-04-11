import { MdClose } from 'react-icons/md'
import styled from 'styled-components/macro'

export const Container = styled.div``

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
`

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;
  box-shadow: 2px 2px 50px rgba(90, 90, 90, 0.5);

  video {
    border-radius: 5px;
    height: 100%;
    width: 100%;
    outline: none;
  }
`

export const Close = styled(MdClose)`
  color: white;
  font-size: 2rem;
  position: absolute;
  right: 15px;
  top: 15px;
  opacity: 0.3;
  cursor: pointer;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
  }
`

export const Button = styled.button`
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 3px;
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
