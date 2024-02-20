import Button from '../Button'

import Indicator from './Indicator'

type Props = {
  currentIdx: number
  itemsLength: number
  onBackClick: () => void
  onNextClick: () => void
}

const BACK_TEXT = 'Back'
const NEXT_TEXT = 'Next'

export default function Controls({
  currentIdx,
  itemsLength,
  onBackClick,
  onNextClick,
}: Props) {
  const isBackButtonDisabled = currentIdx === 0
  const isNextButtonDisabled = currentIdx === itemsLength - 1

  return (
    <div className="flex items-center justify-between">
      <Button onClick={onBackClick} disabled={isBackButtonDisabled}>
        {BACK_TEXT}
      </Button>
      <div className="flex gap-5">
        {[...new Array(itemsLength)].map((_, idx) => {
          const isCurrentCardInFocus = idx === currentIdx
          return <Indicator key={idx} isActiveItem={isCurrentCardInFocus} />
        })}
      </div>
      <Button disabled={isNextButtonDisabled} onClick={onNextClick}>
        {NEXT_TEXT}
      </Button>
    </div>
  )
}
