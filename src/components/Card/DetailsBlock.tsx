type Props = {
  label: string
  text: string
}

export default function DetailsBlock({ label, text }: Props) {
  return (
    <div className="flex flex-col text-white">
      <p className="font-light uppercase text-label xs:text-xs">{label}</p>
      <p className="text-xs font-medium xs:text-sm sm:text-lg">{text}</p>
    </div>
  )
}
