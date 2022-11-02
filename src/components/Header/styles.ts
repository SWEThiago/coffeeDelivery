import styled from 'styled-components'
import { ShoppingCart, Circle, MapPin } from 'phosphor-react'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 12px;
  }
`
export const ShoppingCartFill = styled(ShoppingCart)`
  font-size: 30px;
  border: solid 0.3rem ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CircleFill = styled(Circle)`
  font-size: 18px;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 999px;
`
export const ShoppingCartValue = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -40px;
  margin-left: 18px;

  p {
    color: ${(props) => props.theme.white};
    position: absolute;
    font-size: 12px;
  }
`
export const MapPinFill = styled(MapPin)`
  font-size: 22px;

  color: ${(props) => props.theme.purple};
`
export const Localization = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  border: solid 0.3rem ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  background: ${(props) => props.theme['purple-light']};
  font-size: 14px;
  text-decoration: none;
`
