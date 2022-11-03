import styled from 'styled-components'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export const MapPinFill = styled(MapPin)`
  font-size: 22px;
  color: ${(props) => props.theme.white};
  border: 4px solid ${(props) => props.theme.purple};
  border-radius: 99999px;
  background: ${(props) => props.theme.purple};
`
export const TimerFill = styled(Timer)`
  font-size: 20px;
  color: ${(props) => props.theme.white};
  border: 4px solid ${(props) => props.theme.yellow};
  border-radius: 999px;
  background: ${(props) => props.theme.yellow};
`
export const CurrencyDollarFill = styled(CurrencyDollar)`
  font-size: 20px;
  color: ${(props) => props.theme.white};
  border: 4px solid ${(props) => props.theme['yellow-dark']};
  border-radius: 999px;
  background: ${(props) => props.theme['yellow-dark']};
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  max-width: 51.25rem;
  margin: 4rem auto;

  img {
    width: 350px;
    height: 208px;
    margin-top: 8.325rem;
  }

  div {
    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 130%;
      color: ${(props) => props.theme['yellow-dark']};
      margin-bottom: 1rem;
    }

    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const ContainerBody = styled.body`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 6px 36px;

  div {
    span {
      display: flex;
      gap: 12px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;

      strong {
        font-weight: 700;
      }
    }
  }
`
export const Gradiente = styled.div`
  margin-top: 3rem;
  padding: 1px;
  border-radius: 6px 36px;

  background: linear-gradient(
    150deg,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`
