export type Card = {
  id: number
  cardNumber: string
  expiryDate: string
  cvc: string
  zipCode: string
}

export type Balance = {
  [key: Card['id']]: { cardId: number; availableBalance: number }
}
