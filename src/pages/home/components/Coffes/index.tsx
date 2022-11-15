import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { formatPrice } from '../../../../util/format'
import {
  ButtonBuyCoffee,
  Container,
  MenuCoffees,
  MinusFill,
  PlusFill,
  PriceCoffee,
  ShoppingCartFill,
} from './styles'

export function Coffees() {
  const { coffeesList, handleCoffeeIncrement, handleCoffeeDecrement } =
    useContext(CoffeesContext)

  const coffeeFormatted = coffeesList.map((coffee) => ({
    ...coffee,
    priceFormatted: formatPrice(coffee.price),
  }))
  return (
    <Container>
      {coffeeFormatted.map((coffee) => {
        return (
          <MenuCoffees key={coffee.id}>
            <img src={coffee.image} alt="" />
            <h2>{coffee.label}</h2>
            <h1>{coffee.name}</h1>
            <p>{coffee.description}</p>

            <PriceCoffee>
              <span>
                <strong>{coffee.priceFormatted}</strong>
              </span>
              <div>
                <ButtonBuyCoffee
                  onClick={() => handleCoffeeDecrement(coffee.id)}
                  type="button"
                >
                  <MinusFill weight="bold" />
                </ButtonBuyCoffee>
                <input
                  readOnly
                  value={coffee.amount}
                  type="number"
                  id="coffeeAmount"
                />
                <ButtonBuyCoffee
                  onClick={() => handleCoffeeIncrement(coffee.id)}
                  type="button"
                >
                  <PlusFill weight="bold" />
                </ButtonBuyCoffee>
              </div>
              <a href="/delivery">
                <ShoppingCartFill weight="fill" />
              </a>
            </PriceCoffee>
          </MenuCoffees>
        )
      })}
    </Container>
  )
}
