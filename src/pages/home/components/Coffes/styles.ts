import styled from 'styled-components'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4rem;
  margin-top: 2.5rem;
  max-width: 51.25rem;
  margin: 2rem auto;
`
export const MenuCoffees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3.5rem;
  width: 10rem;
  height: 15.625rem;
  padding: 0.3rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    margin-top: -90px;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.5rem;
    line-height: 130%;
    margin-top: 1rem;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    border: solid 5px ${(props) => props.theme['yellow-light']};
    border-radius: 10px;
  }

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;

    display: flex;
    align-items: flex-end;
    text-align: center;
    margin-top: 1rem;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 130%;
    margin-top: 1rem;
    text-align: center;
  }
`
export const ShoppingCartFill = styled(ShoppingCart)`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-dark']};
  border: solid 4px ${(props) => props.theme['purple-dark']};
  border-radius: 4px;
  font-size: 21px;
`
export const MinusFill = styled(Minus)`
  color: ${(props) => props.theme.purple};
  font-size: 12px;
`
export const PlusFill = styled(Plus)`
  color: ${(props) => props.theme.purple};
  font-size: 12px;
`
export const PriceCoffee = styled.div`
  display: flex;

  align-items: center;
  gap: 8px;
  margin-top: 1rem;

  input {
    background: ${(props) => props.theme['base-button']};
    height: 1.3rem;
    border: solid 1px ${(props) => props.theme['base-button']};
    font-size: 0.875rem;
    width: 1rem;
    padding: 4px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  span {
    font-size: 0.65rem;
    strong {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 1.3rem;
      line-height: 130%;
    }
  }
`
export const ButtonBuyCoffee = styled.button`
  border: solid 1px ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-button']};
  border-radius: 2px;
`
