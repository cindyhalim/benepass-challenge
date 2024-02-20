import { useContext } from 'react'
import { CurrentCardContext } from '../contexts/CurrentCardContext'

export default function useCurrentCard() {
  return useContext(CurrentCardContext)
}
