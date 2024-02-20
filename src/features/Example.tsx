import { useState } from 'react'

import Card from '../components/Card'
import Checkbox from '../components/Checkbox'
import { MOCK_CARDS } from '../mock-data'

const TITLE = 'Flex card'
const DESCRIPTION = 'Used for pre-tax purchases'
const CHECKBOX_LABEL = 'Show details'

export default function Example() {
  const [showCardDetails, setShowCardDetails] = useState(false)
  const { cardNumber, expiryDate, cvc, zipCode } = MOCK_CARDS[0]

  return (
    <>
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
    </>
  )
}
