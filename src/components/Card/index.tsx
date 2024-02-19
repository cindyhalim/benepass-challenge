import Header from './Header'
import DetailsBlock from './DetailsBlock'
import Footer from './Footer'

type Props = {
  cardNumber: string
  expiryDate: string
  cvc: string
  zipCode: string
  showDetails: boolean
}

const EXPIRY_DATE_LABEL = 'Valid Thru'
const CVC_LABEL = 'CVC'

export default function Card({
  cardNumber,
  expiryDate,
  cvc,
  zipCode,
  showDetails,
}: Props) {
  const lastFourDigits = cardNumber.slice(
    cardNumber.length - 5,
    cardNumber.length
  )
  const formattedCardNumber = showDetails ? cardNumber : `••• ${lastFourDigits}`
  const formattedCVC = showDetails ? cvc : '•••'
  return (
    <div className="min-h-[200px] min-w-[275px] max-w-[395px] max-h-[272-px] flex flex-col relative">
      <img
        alt="Card background"
        src="/src/assets/card-background.png"
        className="absolute rounded-lg shadow-xl size-full"
      />
      <div className="relative flex flex-col h-full gap-4 p-6 xs:gap-5 sm:gap-6">
        <Header />
        <p className="text-white xs:text-xl sm:text-title">
          {formattedCardNumber}
        </p>
        <div className="flex gap-10">
          <DetailsBlock label={EXPIRY_DATE_LABEL} text={expiryDate} />
          <DetailsBlock label={CVC_LABEL} text={formattedCVC} />
        </div>
        <Footer zipCode={zipCode} />
      </div>
    </div>
  )
}
