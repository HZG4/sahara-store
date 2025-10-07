export interface Category {
  id: string
  name: string
  image: string
  isActive?: boolean
}

export interface Product {
  id: string
  name: string
  description: string
  image: string
}

export interface Promotion {
  id: string
  title: string
  description: string
  image: string
  buttonText: string
}
