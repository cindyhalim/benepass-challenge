type Props = {
  isActiveItem: boolean
}

export default function Indicator({ isActiveItem }: Props) {
  const activeStyles = isActiveItem ? 'bg-brandAccent' : 'bg-grey'
  return (
    <div
      className={`transition-bg ease-in-out shadow-sm rounded-full size-2 ${activeStyles}`}
    />
  )
}
