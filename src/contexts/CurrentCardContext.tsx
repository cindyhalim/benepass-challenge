import { useState, type PropsWithChildren, createContext } from 'react'

type CurrentCardContextValue = {
  currentCardIdx: number
  showDetails: boolean
  setCurrentCardIdx: (newIdx: number) => void
  toggleCardDetails: () => void
}

const initialValues = {
  currentCardIdx: 0,
  showDetails: false,
  setCurrentCardIdx: () => {},
  toggleCardDetails: () => {},
}

export const CurrentCardContext =
  createContext<CurrentCardContextValue>(initialValues)

export function CurrentCardProvider({ children }: PropsWithChildren) {
  const [localCurrentCardIdx, localSetCurrentCardIdx] = useState(0)
  const [localShowDetails, localSetShowDetails] = useState(false)

  function setCurrentCardIdx(newIdx: number) {
    localSetCurrentCardIdx(newIdx)
  }

  function toggleCardDetails() {
    localSetShowDetails(!localShowDetails)
  }

  return (
    <CurrentCardContext.Provider
      value={{
        currentCardIdx: localCurrentCardIdx,
        setCurrentCardIdx,
        showDetails: localShowDetails,
        toggleCardDetails,
      }}
    >
      {children}
    </CurrentCardContext.Provider>
  )
}
