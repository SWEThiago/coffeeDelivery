import styled from 'styled-components'
import {
  Minus,
  Plus,
  Trash,
  MapPin,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2.5rem;
  max-width: 51.25rem;
  margin: 2rem auto;

  div {
    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 1rem;
    }
  }
`

export const MapPinFill = styled(MapPin)`
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 12px;
`
export const BankFill = styled(Bank)`
  color: ${(props) => props.theme.purple};
  font-size: 12px;
`
export const MoneyFill = styled(Money)`
  color: ${(props) => props.theme.purple};
  font-size: 12px;
`
export const CreditCardFill = styled(CreditCard)`
  color: ${(props) => props.theme.purple};
  font-size: 12px;
`
export const CurrencyDollarFill = styled(CurrencyDollar)`
  color: ${(props) => props.theme.purple};
  font-size: 12px;
`
