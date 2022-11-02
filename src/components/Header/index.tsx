import {
  CircleFill,
  HeaderContainer,
  Localization,
  MapPinFill,
  ShoppingCartFill,
  ShoppingCartValue,
} from './styles'

import logoCoffee from '../../assets/logoCoffee.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />

      <nav>
        <Localization
          target="_blank"
          href="https://goo.gl/maps/4inAB8nuYFEpTLYA7"
        >
          <MapPinFill weight="fill" />
          <p>Patos de Minas, MG</p>
        </Localization>
        <a href="#">
          <ShoppingCartFill weight="fill" />
          <ShoppingCartValue>
            <CircleFill />
            <p>3</p>
          </ShoppingCartValue>
        </a>
      </nav>
    </HeaderContainer>
  )
}
