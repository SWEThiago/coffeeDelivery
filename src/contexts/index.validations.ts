import * as yup from 'yup'

export const FormValidations = yup.object().shape({
  cep: yup
    .number()
    .min(8, 'Informe um cep válido')
    .max(8, 'Informe um cep válido')
    .required(),
  numero: yup.number().min(1, 'Informe um numero válido').required(),
  rua: yup.string().required(),
  complemento: yup.string(),
  bairro: yup.string().required(),
  cidade: yup.string().required(),
  uf: yup
    .string()
    .min(2, 'Informe um UF válido')
    .max(2, 'Informe um UF válido')
    .required(),
})
