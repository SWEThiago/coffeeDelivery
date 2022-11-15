import { useContext } from 'react'
import coffeeImg from '../../../../../public/ExpressoTradicional.svg'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { formatPrice } from '../../../../util/format'
import {
  ButtonBuy,
  ButtonBuyCoffee,
  ButtonRemoverCoffee,
  Division,
  Division2,
  MenuCoffees,
  MinusFill,
  PlusFill,
  PriceCoffee,
  SelectCoffees,
  TrashFill,
} from './styles'

export function SelectCoffe() {
  const {
    totalPrices,
    sumCoffeesPrices,
    handleCoffeeIncrement,
    handleCoffeeDecrement,
    hendleRemoveCoffee,
    handleCoffeeComplete,
  } = useContext(CoffeesContext)

  const coffeeFormatted = totalPrices.map((coffee) => ({
    ...coffee,
    priceFormatted: formatPrice(coffee.price * coffee.amount),
  }))

  return (
    <div>
      <h1>Cafés selecionados</h1>
      <MenuCoffees>
        <Division>
          {coffeeFormatted.map((coffee) => {
            return (
              <SelectCoffees key={coffee.id}>
                <img src={coffee.image} alt="" />
                <div>
                  <h1>{coffee.name}</h1>

                  <PriceCoffee>
                    <div>
                      <ButtonBuyCoffee
                        onClick={() => handleCoffeeDecrement(coffee.id)}
                        type="button"
                      >
                        <MinusFill weight="bold" />
                      </ButtonBuyCoffee>
                      <input
                        type="number"
                        id="coffeeAmount"
                        value={coffee.amount}
                      />
                      <ButtonBuyCoffee
                        onClick={() => handleCoffeeIncrement(coffee.id)}
                        type="button"
                      >
                        <PlusFill weight="bold" />
                      </ButtonBuyCoffee>
                    </div>
                    <ButtonRemoverCoffee
                      onClick={() => hendleRemoveCoffee(coffee.id)}
                      type="button"
                    >
                      <TrashFill /> REMOVER
                    </ButtonRemoverCoffee>
                  </PriceCoffee>
                </div>
                <span>
                  <strong>{coffee.priceFormatted}</strong>
                </span>
              </SelectCoffees>
            )
          })}
        </Division>
        <Division2>
          <span>Total de itens</span>
          <span>{formatPrice(sumCoffeesPrices)}</span>
        </Division2>
        <Division2>
          <span>Taxa de entrega</span>
          <span>R$ 3,50</span>
        </Division2>
        <Division2>
          <strong>Total</strong>
          <strong>{formatPrice(sumCoffeesPrices + 3.5)}</strong>
        </Division2>
        <ButtonBuy
          type="button"
          onClick={() => handleCoffeeComplete()}
          href="/delivery/completed"
        >
          CONFIRMA PEDIDO
        </ButtonBuy>
      </MenuCoffees>
    </div>
  )
}
