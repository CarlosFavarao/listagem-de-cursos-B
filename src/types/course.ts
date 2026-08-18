export type Categoria = 'Graduação' | 'Pós-Graduação' | 'Profissionalizante' | 'Técnico'

export type Modalidade = 'Presencial' | 'EaD' | 'Semipresencial'

export type Area =
  | 'Educação'
  | 'Saúde'
  | 'Exatas e Tecnologia'
  | 'Humanas'
  | 'Negócios'
  | 'Artes e Design'

export interface Course {
  id: string
  nome: string
  categoria: Categoria
  modalidades: Modalidade[]
  area: Area
  grau: string
  duracao: string
  thumbnailColor: string
  thumbnailLabel: string
}
