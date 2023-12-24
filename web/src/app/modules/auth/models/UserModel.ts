export interface UserModel {
  id: number
  username: string
  password: string | undefined
  email: string
  firstname: string
  lastname: string
  phone?: string
  pic?: string
}
