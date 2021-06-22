import { Status } from '@/types'

export type IngredientsOrStep = {
  index: number
  text: string
}

export type RecipeUser = {
  name: string
}

export type RecipeImage = {
  url: string
}

export default interface Recipe {
  id: number
  title: string
  description: string
  preparationTime: string
  portions: number
  ingredients: IngredientsOrStep[]
  steps: IngredientsOrStep[]
  status: Status
  createdAt?: string
  updatedAt?: string
  user_id: number
  user: RecipeUser
  image: RecipeImage
}
