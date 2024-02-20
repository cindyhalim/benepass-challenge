import Card from '../../components/Card'
import Controls from '../../components/Carousel/Controls'
import useCurrentCard from '../../hooks/useCurrentCard'
import type { Card as TCard } from '../../types'

type Props = {
  cards: TCard[]
}

export default function CardsCarousel({ cards }: Props) {
  const { currentCardIdx, setCurrentCardIdx, showDetails } = useCurrentCard()

  function onBackClick() {
    if (currentCardIdx === 0) return
    setCurrentCardIdx(currentCardIdx - 1)
  }

  function onNextClick() {
    if (currentCardIdx === cards.length - 1) return
    setCurrentCardIdx(currentCardIdx + 1)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-[350px] xs:h-[400px] sm:h-[450px]">
        {cards.map((card, idx) => {
          const isCurrentCardInFocus = idx === currentCardIdx
          const backgroundCardsStyles =
            !isCurrentCardInFocus && 'opacity-85 scale-[0.8]'
          const currentCardStyles = isCurrentCardInFocus && 'z-50'
          const beforeCardStyles =
            idx < currentCardIdx && 'origin-top-right rotate-12'
          const afterCardStyles =
            idx > currentCardIdx && 'origin-bottom-right -rotate-12'

          return (
            <div
              key={idx}
              className={`transition-translate ease-in-out delay-150 duration-300 absolute translate-y-1/3 ${backgroundCardsStyles} ${beforeCardStyles} ${currentCardStyles} ${afterCardStyles}`}
              style={{
                zIndex: isCurrentCardInFocus ? 1 : 0 - idx,
              }}
            >
              <Card
                showDetails={showDetails}
                cardNumber={card.cardNumber}
                expiryDate={card.expiryDate}
                cvc={card.cvc}
                zipCode={card.zipCode}
              />
            </div>
          )
        })}
      </div>
      <Controls
        currentIdx={currentCardIdx}
        itemsLength={cards.length}
        onBackClick={onBackClick}
        onNextClick={onNextClick}
      />
    </div>
  )
}
