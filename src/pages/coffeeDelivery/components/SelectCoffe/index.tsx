import coffeeImg from '../../../../../public/ExpressoTradicional.svg'
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
  return (
    <div>
      <h1>Cafés selecionados</h1>
      <MenuCoffees>
        <Division>
          <SelectCoffees>
            <img src={coffeeImg} alt="" />
            <div>
              <h1>Expresso Tradicional</h1>

              <PriceCoffee>
                <div>
                  <ButtonBuyCoffee type="button">
                    <MinusFill weight="bold" />
                  </ButtonBuyCoffee>
                  <input type="number" id="coffeeAmount" placeholder="1" />
                  <ButtonBuyCoffee type="button">
                    <PlusFill weight="bold" />
                  </ButtonBuyCoffee>
                </div>
                <ButtonRemoverCoffee type="button">
                  <TrashFill /> REMOVER
                </ButtonRemoverCoffee>
              </PriceCoffee>
            </div>
            <span>
              R$ <strong>9,90</strong>
            </span>
          </SelectCoffees>
        </Division>
        <Division2>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </Division2>
        <Division2>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </Division2>
        <Division2>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </Division2>
        <ButtonBuy>CONFIRMA PEDIDO</ButtonBuy>
      </MenuCoffees>
    </div>
  )
}
