export default {
  required: (val: any) => !!val || 'Campo obrigatório',
  areValuesEqual: (
    firstValue: string | number | boolean,
    secondValue: string | number | boolean,
    label = 'Os valores não são iguais',
  ) => {
    return firstValue === secondValue || label
  },
  isEmailValid: (email: string) =>
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
      email,
    ) || 'Email inválido',
}
