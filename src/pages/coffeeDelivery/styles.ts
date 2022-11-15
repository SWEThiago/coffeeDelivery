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
  display: flex;
  flex-direction: row;
  gap: 1rem;

  max-width: 51.25rem;
  margin: 4rem auto;

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
  font-size: 20px;
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
  font-size: 20px;
`
export const ContainerForm = styled.form`
  padding: 1.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  /* 
  width: 640px;
  height: 372px; */
`
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  section {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  margin-top: 1.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    gap: 8px;
    background: ${(props) => props.theme['base-button']};
    border: 12px solid ${(props) => props.theme['base-button']};
    border-radius: 6px;
    width: 145px;
    color: ${(props) => props.theme['base-text']};

    :hover {
      background: ${(props) => props.theme['purple-light']};
      border: 12px solid ${(props) => props.theme['purple-light']};
    }
  }
`
export const FooterContainer = styled.div`
  padding: 1.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px;
  margin-top: 0.875rem;
`
export const InputCep = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  width: 150px;
  height: 38px;
`
export const InputRua = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  width: 446px;
  height: 38px;
`
export const InputNumero = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  width: 150px;
  height: 38px;
`
export const InputComplemento = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  width: 280px;
  height: 38px;
`
export const Inputbairro = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  width: 150px;
  height: 38px;
`
export const InputCidade = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  width: 216px;
  height: 38px;
`
export const InputUF = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  width: 48px;
  height: 38px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
