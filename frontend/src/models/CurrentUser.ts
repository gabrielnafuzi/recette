import { UserRole } from '@/types'

export default interface CurrentUser {
  id: number
  name: string
  email: string
  role: UserRole
  createdAt?: string
  updatedAt?: string
}
