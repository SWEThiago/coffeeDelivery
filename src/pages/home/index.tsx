import CoffeeLogo from '../../assets/coffeehomepage.png'
import { Coffees } from './components/Coffes'

import {
  CoffeeFill,
  Container,
  ContainerTitle,
  MenuCoffees,
  MenuCoffeesTitle,
  PackageFill,
  ShoppingCartFill,
  TimerFill,
} from './styles'

export function Home() {
  return (
    <>
      <Container>
        <ContainerTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div>
            <div>
              <ShoppingCartFill weight="fill" />
              Compra simples e segura
            </div>
            <div>
              <PackageFill weight="fill" />
              Embalagem mantém o café intacto
            </div>
            <div>
              <TimerFill weight="fill" />
              Entrega rápida e rastreada
            </div>
            <div>
              <CoffeeFill weight="fill" />O café chega fresquinho até você
            </div>
          </div>
        </ContainerTitle>

        <img src={CoffeeLogo} alt="" />
      </Container>

      <MenuCoffeesTitle>Nossos cafés</MenuCoffeesTitle>
      <MenuCoffees>
        <Coffees />
      </MenuCoffees>
    </>
  )
}
