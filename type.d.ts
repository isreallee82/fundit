
export interface Donation {
  name: string
  description: string
  amount_raised: number
  date: string
  donations?: Donation[]
}

export interface Users {
  id: number
  UserName: Method
  image: string
  email: string
  password: string
  role?: string
  fullName: string
  location: string
  age: number
  address: string
  height: number
  company: string
}
