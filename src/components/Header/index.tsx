import { useContext } from 'react'
import {
  CircleFill,
  HeaderContainer,
  Localization,
  MapPinFill,
  ShoppingCartFill,
  ShoppingCartValue,
} from './styles'

import logoCoffee from '../../assets/logoCoffee.png'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Header() {
  const { sumCoffees } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoCoffee} alt="" />
      </a>
      <nav>
        <Localization
          target="_blank"
          href="https://goo.gl/maps/4inAB8nuYFEpTLYA7"
        >
          <MapPinFill weight="fill" />
          <p>Patos de Minas, MG</p>
        </Localization>
        <a href="/delivery">
          <ShoppingCartFill weight="fill" />
          {sumCoffees > 0 && (
            <ShoppingCartValue>
              <CircleFill />
              {<p>{sumCoffees}</p>}
            </ShoppingCartValue>
          )}
        </a>
      </nav>
    </HeaderContainer>
  )
}
