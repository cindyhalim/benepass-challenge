import Checkbox from '../../components/Checkbox'
import useCurrentCard from '../../hooks/useCurrentCard'
import { MOCK_BALANCES, MOCK_CARDS } from '../../mock-data'

export default function CardOverview() {
  const { currentCardIdx, toggleCardDetails, showDetails } = useCurrentCard()
  const currentCardId = MOCK_CARDS[currentCardIdx].id
  const availableBalance = MOCK_BALANCES[currentCardId].availableBalance
  return (
    <div className=" border-gray-200 border-[1px] rounded-lg w-full max-w-[400px] flex flex-col">
      <div className="flex flex-col items-center gap-3 py-6 bg-gray-100 rounded-t-lg">
        <h3 className="text-sm font-light uppercase">Available Balance</h3>
        <h1 className="text-3xl font-medium md:text-5xl">{`$${availableBalance}`}</h1>
      </div>
      <div className="self-center">
        <Checkbox
          isChecked={showDetails}
          label="Show details"
          onClick={toggleCardDetails}
        />
      </div>
    </div>
  )
}
