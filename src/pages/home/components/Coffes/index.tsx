import { useEffect, useState } from 'react'
import {
  ButtonBuyCoffee,
  Container,
  MenuCoffees,
  MinusFill,
  PlusFill,
  PriceCoffee,
  ShoppingCartFill,
} from './styles'

interface CoffeesMenu {
  id: number
  label: string
  name: string
  description: string
  price: number
  available?: boolean
  image: string
}

export function Coffees() {
  const [coffeesList, setCoffeesList] = useState<CoffeesMenu[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/coffes')
      .then((response) => response.json())
      .then((data) => setCoffeesList(data))
  }, [])

  return (
    <Container>
      {coffeesList.map((coffee) => {
        return (
          <MenuCoffees key={coffee.id}>
            <img src={coffee.image} alt="" />
            <h2>{coffee.label}</h2>
            <h1>{coffee.name}</h1>
            <p>{coffee.description}</p>

            <PriceCoffee>
              <span>
                R$ <strong>{coffee.price}</strong>
              </span>
              <div>
                <ButtonBuyCoffee type="button">
                  <MinusFill weight="bold" />
                </ButtonBuyCoffee>
                <input type="number" id="coffeeAmount" placeholder="1" />
                <ButtonBuyCoffee type="button">
                  <PlusFill weight="bold" />
                </ButtonBuyCoffee>
              </div>
              <ButtonBuyCoffee type="button">
                <ShoppingCartFill weight="fill" />
              </ButtonBuyCoffee>
            </PriceCoffee>
          </MenuCoffees>
        )
      })}
    </Container>
  )
}
