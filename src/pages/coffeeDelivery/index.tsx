import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  BankFill,
  Container,
  CreditCardFill,
  CurrencyDollarFill,
  MapPinFill,
  MoneyFill,
} from './styles'
import { SelectCoffe } from './components/SelectCoffe'

const newCoffeeFormValidationSchema = zod.object({
  cep: zod
    .number()
    .min(8, 'Informe um cep válido')
    .max(8, 'Informe um cep válido'),
  numero: zod.number().min(1, 'Informe um numero válido'),
  rua: zod.string(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod
    .string()
    .min(2, 'Informe um UF válido')
    .max(2, 'Informe um UF válido'),
})

type NewCoffeeFormData = zod.infer<typeof newCoffeeFormValidationSchema>

export function CoffeeDelivery() {
  const newCoffeeForm = useForm<NewCoffeeFormData>({
    resolver: zodResolver(newCoffeeFormValidationSchema),
    defaultValues: {
      cep: 0,
      numero: 0,
      rua: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = newCoffeeForm

  function handleCreateNewCoffee(data: NewCoffeeFormData) {
    reset()
  }

  return (
    <Container>
      <div>
        <h1>Complete seu pedido</h1>
        <form onSubmit={handleSubmit(handleCreateNewCoffee)} action="">
          <div>
            <MapPinFill />
            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <input id="cep" list="cep-suggestions" placeholder="CEP" />
          <datalist id="cep-suggestions"></datalist>

          <input id="rua" list="rua-suggestions" placeholder="Rua" />
          <datalist id="rua-suggestions"></datalist>

          <input id="numero" list="numero-suggestions" placeholder="Número" />
          <datalist id="numero-suggestions"></datalist>

          <input
            id="complemento"
            list="complemento-suggestions"
            placeholder="Complemento             opcional"
          />
          <datalist id="complemento-suggestions"></datalist>

          <input id="bairro" list="bairro-suggestions" placeholder="Bairro" />
          <datalist id="bairro-suggestions"></datalist>

          <input id="cidade" list="cidade-suggestions" placeholder="Cidade" />
          <datalist id="cidade-suggestions"></datalist>

          <input id="uf" list="uf-suggestions" placeholder="UF" />
          <datalist id="uf-suggestions"></datalist>

          <div>
            <div>
              <CurrencyDollarFill />
              <div>
                <span>Pagamento</span>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>

            <div>
              <button>
                <CreditCardFill />
                Cartão de crédito
              </button>
              <button>
                <BankFill />
                cartão de débito
              </button>
              <button>
                <MoneyFill />
                dinheiro
              </button>
            </div>
          </div>
        </form>
      </div>

      <SelectCoffe />
    </Container>
  )
}
