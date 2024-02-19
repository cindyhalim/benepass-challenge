import { useState } from 'react'

import Card from './components/Card'
import Checkbox from './components/Checkbox'

const TITLE = 'Flex card'
const DESCRIPTION = 'Used for pre-tax purchases'
const CHECKBOX_LABEL = 'Show details'

const MOCK_CARD_DATA = {
  cardNumber: '1232 2223 4432 1732',
  expiryDate: '8/28',
  cvc: '345',
  zipCode: '66062',
}

export default function Example() {
  const [showCardDetails, setShowCardDetails] = useState(false)
  const { cardNumber, expiryDate, cvc, zipCode } = MOCK_CARD_DATA

  return (
    <div className="px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-16">
      <h1 className="font-medium text-title">{TITLE}</h1>
      <h3 className="mb-8 text-xl font-normal">{DESCRIPTION}</h3>
      <Card
        showDetails={showCardDetails}
        cardNumber={cardNumber}
        expiryDate={expiryDate}
        cvc={cvc}
        zipCode={zipCode}
      />
      <Checkbox
        label={CHECKBOX_LABEL}
        onClick={() => {
          setShowCardDetails(!showCardDetails)
        }}
      />
    </div>
  )
}
