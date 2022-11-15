import { FormValidations } from '../../contexts/index.validations'
import { yupResolver } from '@hookform/resolvers/yup'

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
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface CreateNewForm {
  cep: number
  numero: number
  rua: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

const initialFormState = {
  cep: '',
  numero: '',
  rua: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: '',
}

export function CoffeeDelivery() {
  const [form, setForm] = useState(initialFormState)
  const { register, handleSubmit } = useForm({
    defaultValues: initialFormState,
    resolver: yupResolver(FormValidations),
  })

  function setInput(inputName) {
    return (e) => {
      const newValue = { [inputName]: e.target.value }
      return setForm((form) => ({ ...form, ...newValue }))
    }
  }

  localStorage.setItem(
    'ThiagoGonçalves: CoffeeDelivery-state-form-1.0.0',
    JSON.stringify(form),
  )

  return (
    <Container>
      <div>
        <h1>Complete seu pedido</h1>

        <ContainerForm>
          <Title>
            <MapPinFill />
            <section>
              <h2>Endereço de Entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </section>
          </Title>

          <InputCep
            id="cep"
            list="cep-suggestions"
            placeholder="CEP"
            type="text"
            {...register('cep')}
          />
          <datalist id="cep-suggestions"></datalist>

          <InputRua
            id="rua"
            list="rua-suggestions"
            placeholder="Rua"
            type="text"
            onChange={setInput('rua')}
            value={form.rua}
          />
          <datalist id="rua-suggestions"></datalist>

          <InputContainer>
            <InputNumero
              id="numero"
              list="numero-suggestions"
              placeholder="Número"
              type="text"
              onChange={setInput('numero')}
              value={form.numero}
            />
            <datalist id="numero-suggestions"></datalist>

            <InputComplemento
              id="complemento"
              list="complemento-suggestions"
              placeholder="Complemento                                 opcional"
              type="text"
              onChange={setInput('complemento')}
              value={form.complemento}
            />
            <datalist id="complemento-suggestions"></datalist>
          </InputContainer>

          <InputContainer>
            <Inputbairro
              id="bairro"
              list="bairro-suggestions"
              placeholder="Bairro"
              type="text"
              onChange={setInput('bairro')}
              value={form.bairro}
            />
            <datalist id="bairro-suggestions"></datalist>

            <InputCidade
              id="cidade"
              list="cidade-suggestions"
              placeholder="Cidade"
              type="text"
              onChange={setInput('cidade')}
              value={form.cidade}
            />
            <datalist id="cidade-suggestions"></datalist>

            <InputUF
              id="uf"
              list="uf-suggestions"
              placeholder="UF"
              type="text"
              onChange={setInput('uf')}
              value={form.uf}
            />
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
