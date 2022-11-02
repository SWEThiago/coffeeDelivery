import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  BankFill,
  Container,
  ContainerForm,
  CreditCardFill,
  CurrencyDollarFill,
  Title,
  MapPinFill,
  MoneyFill,
  Footer,
  FooterContainer,
  InputRua,
  InputNumero,
  InputCep,
  InputComplemento,
  Inputbairro,
  InputCidade,
  InputUF,
  InputContainer,
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
        <ContainerForm onSubmit={handleSubmit(handleCreateNewCoffee)} action="">
          <Title>
            <MapPinFill />
            <section>
              <h2>Endereço de Entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </section>
          </Title>

          <InputCep id="cep" list="cep-suggestions" placeholder="CEP" />
          <datalist id="cep-suggestions"></datalist>

          <InputRua id="rua" list="rua-suggestions" placeholder="Rua" />
          <datalist id="rua-suggestions"></datalist>

          <InputContainer>
            <InputNumero
              id="numero"
              list="numero-suggestions"
              placeholder="Número"
            />
            <datalist id="numero-suggestions"></datalist>

            <InputComplemento
              id="complemento"
              list="complemento-suggestions"
              placeholder="Complemento                                 opcional"
            />
            <datalist id="complemento-suggestions"></datalist>
          </InputContainer>

          <InputContainer>
            <Inputbairro
              id="bairro"
              list="bairro-suggestions"
              placeholder="Bairro"
            />
            <datalist id="bairro-suggestions"></datalist>

            <InputCidade
              id="cidade"
              list="cidade-suggestions"
              placeholder="Cidade"
            />
            <datalist id="cidade-suggestions"></datalist>

            <InputUF id="uf" list="uf-suggestions" placeholder="UF" />
            <datalist id="uf-suggestions"></datalist>
          </InputContainer>
        </ContainerForm>

        <FooterContainer>
          <Title>
            <CurrencyDollarFill />
            <section>
              <h2>Pagamento</h2>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </section>
          </Title>

          <Footer>
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
          </Footer>
        </FooterContainer>
      </div>

      <SelectCoffe />
    </Container>
  )
}
