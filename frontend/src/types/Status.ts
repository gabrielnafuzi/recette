export type Status = 'approved' | 'disapproved' | 'analysis'

export enum StatusTitles {
  approved = 'Aprovado',
  disapproved = 'Reprovado',
  analysis = 'Em análise',
}

export enum StatusModes {
  approved = 'success',
  disapproved = 'error',
  analysis = 'warning',
}
