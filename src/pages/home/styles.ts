import styled from 'styled-components'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'

export const Container = styled.div`
  max-width: 51.25rem;
  margin: 2rem auto;
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin-top: 7.75rem;

  img {
    width: 360px;
    height: 272.27px;
    margin-right: -2rem;
  }
`
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 3.9rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2rem;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    div {
      font-family: Roboto;
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 2rem;
      color: ${(props) => props.theme['base-text']};
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`
export const ShoppingCartFill = styled(ShoppingCart)`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
  border: solid 4px ${(props) => props.theme['yellow-dark']};
  border-radius: 999px;
  font-size: 21px;
`
export const TimerFill = styled(Timer)`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  border: solid 4px ${(props) => props.theme.yellow};
  border-radius: 999px;
  font-size: 21px;
`
export const CoffeeFill = styled(Coffee)`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.purple};
  border: solid 4px ${(props) => props.theme.purple};
  border-radius: 999px;
  font-size: 21px;
`
export const PackageFill = styled(Package)`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['base-text']};
  border: solid 4px ${(props) => props.theme['base-text']};
  border-radius: 999px;
  font-size: 21px;
`
export const MenuCoffeesTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 3.9rem;
  color: ${(props) => props.theme['base-subtitle']};

  max-width: 51.25rem;
  margin-top: 4rem;
  display: flex;
  align-items: top;
`

export const MenuCoffees = styled.div``
