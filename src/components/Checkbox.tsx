import { useState } from 'react'

type Props = {
  label: string
  onClick: () => void
  isChecked?: boolean
}

export default function Checkbox({ label, onClick, isChecked = false }: Props) {
  const [localIsChecked, setLocalIsChecked] = useState(isChecked)
  const labelStyles = localIsChecked ? 'text-brandAccent' : 'text-gray-800'

  function handleOnClick() {
    setLocalIsChecked(!localIsChecked)
    onClick()
  }

  return (
    <div className="flex items-center gap-3 my-5">
      <input
        onClick={handleOnClick}
        type="checkbox"
        name="showDetails"
        className="relative size-6 bg-white rounded-md appearance-none peer border-grey border-[1px] checked:bg-brandAccent checked:border-none"
      />
      <label
        htmlFor="showDetails"
        className={`font-medium text-sm sm:text-base ${labelStyles}`}
      >
        {label}
      </label>
      <span className="absolute ml-[6px] pointer-events-none">
        <svg
          className="size-3"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3117 3.18306C10.5628 3.42714 10.5628 3.82286 10.3117 4.06695L5.16886 9.06695C4.91781 9.31102 4.51078 9.31102 4.25972 9.06695L1.68829 6.56695C1.43724 6.32288 1.43724 5.92714 1.68829 5.68306C1.93934 5.43899 2.34637 5.43899 2.59743 5.68306L4.71429 7.74114L9.40259 3.18306C9.65363 2.93898 10.0607 2.93898 10.3117 3.18306Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  )
}
