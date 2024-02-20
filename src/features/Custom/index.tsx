import { CurrentCardProvider } from '../../contexts/CurrentCardContext'
import CardsCarousel from './CardCarousel'
import CardOverview from './CardOverview'
import { MOCK_CARDS } from '../../mock-data'

const TITLE = 'My Cards'

export default function Custom() {
  return (
    <CurrentCardProvider>
      <div className="flex flex-wrap items-center justify-center gap-10 py-6">
        <div className="w-full max-w-[395px]">
          <h1 className="mb-3 text-3xl font-medium">{TITLE}</h1>
          <CardsCarousel cards={MOCK_CARDS} />
        </div>
        <CardOverview />
      </div>
    </CurrentCardProvider>
  )
}
