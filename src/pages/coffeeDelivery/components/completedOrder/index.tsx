import { useEffect } from 'react'
import delivery from '../../../../assets/deliveryImg.png'
import {
  Container,
  ContainerBody,
  CurrencyDollarFill,
  Gradiente,
  MapPinFill,
  TimerFill,
} from './styles'

interface CreateNewForm {
  cep: number
  numero: number
  rua: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

export function CompletedOrder() {
  const JsonForm = localStorage.getItem(
    'ThiagoGonçalves: CoffeeDelivery-state-form-1.0.0',
  )

  const form: CreateNewForm = JSON.parse(JsonForm)

  return (
    <Container>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <Gradiente>
          <ContainerBody>
            <div>
              <span>
                <MapPinFill weight="fill" />
                Entrega em rua {form.rua}, {form.numero} {form.bairro} -{' '}
                {form.cidade}, {form.uf}
              </span>
            </div>

            <div>
              <span>
                <TimerFill weight="fill" />
                Previsão de entrega <strong>20 min - 30 min</strong>
              </span>
            </div>

            <div>
              <span>
                <CurrencyDollarFill weight="fill" />
                Pagamento na entrega<strong>Cartão de Crédito</strong>
              </span>
            </div>
          </ContainerBody>
        </Gradiente>
      </div>

      <img src={delivery} alt="" />
    </Container>
  )
}
