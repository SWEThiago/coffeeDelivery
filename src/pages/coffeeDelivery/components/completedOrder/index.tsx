import delivery from '../../../../assets/deliveryImg.png'
import {
  Container,
  ContainerBody,
  CurrencyDollarFill,
  Gradiente,
  MapPinFill,
  TimerFill,
} from './styles'

export function CompletedOrder() {
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
                Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                Alegre, RS
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
