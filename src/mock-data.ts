import type { Balance, Card } from './types'

export const MOCK_CARDS: Card[] = [
  {
    id: 1,
    cardNumber: '1232 2223 4432 1732',
    expiryDate: '8/28',
    cvc: '345',
    zipCode: '66062',
  },
  {
    id: 2,
    cardNumber: '4023 9577 8075 6793',
    expiryDate: '2/24',
    cvc: '789',
    zipCode: '66063',
  },
  {
    id: 3,
    cardNumber: '4023 9515 0304 4868',
    expiryDate: '10/26',
    cvc: '881',
    zipCode: '66064',
  },
]

export const MOCK_BALANCES: Balance = {
  1: {
    cardId: 1,
    availableBalance: 650.05,
  },
  2: {
    cardId: 2,
    availableBalance: 20.55,
  },
  3: {
    cardId: 3,
    availableBalance: 16.99,
  },
}
