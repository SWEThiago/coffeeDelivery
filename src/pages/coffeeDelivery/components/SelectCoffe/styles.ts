import styled from 'styled-components'
import { Minus, Plus, Trash } from 'phosphor-react'

export const MinusFill = styled(Minus)`
  color: ${(props) => props.theme.purple};
  font-size: 10px;
`
export const PlusFill = styled(Plus)`
  color: ${(props) => props.theme.purple};
  font-size: 10px;
`
export const TrashFill = styled(Trash)`
  color: ${(props) => props.theme.purple};
  font-size: 10px;
`
export const ButtonBuyCoffee = styled.button`
  border: 0;
  background: ${(props) => props.theme['base-button']};
`
export const ButtonRemoverCoffee = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 4px;

  border: solid 6px ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  margin-left: 16px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
`
export const Division = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
`
export const PriceCoffee = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 0.8rem;

  div {
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 2px;
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  input {
    background: transparent;
    height: 1.3rem;
    border: solid 1px ${(props) => props.theme['base-button']};
    font-size: 10px;
    width: 1.1rem;
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
export const MenuCoffees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;

  padding: 1.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
`
export const SelectCoffees = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;

  div {
    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 130%;
      text-align: center;
    }
  }

  span {
    display: flex;
    flex-direction: row;
    flex: 1;
    text-align: right;
    gap: 4px;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`
export const Division2 = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ButtonBuy = styled.button`
  border: solid 6px ${(props) => props.theme.yellow};
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;
`
