import { type PropsWithChildren } from 'react'

type Props = {
  onClick: () => void
  disabled?: boolean
}

export default function Button({
  onClick,
  children,
  disabled,
}: PropsWithChildren<Props>) {
  const disabledStyles = disabled && 'cursor-not-allowed hover:opacity-60'
  return (
    <button
      disabled={disabled}
      className={`py-2.5 px-5 me-2 mb-2 bg-white rounded-full border border-gray-200 hover:bg-gray-100 font-medium text-xs sm:text-sm text:brand active:text-brandAccent hover:text-brandAccent ${disabledStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
