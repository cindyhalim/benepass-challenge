type Props = { zipCode: string }

function CardSpace() {
  return <div className="h-8 xs:h-10 sm:h-12" />
}

export default function Footer({ zipCode }: Props) {
  const formattedZipCode = `ZIP ${zipCode}`

  return (
    <>
      <CardSpace />
      <p className="absolute text-sm font-light text-white xs:text-base sm:text-lg bottom-6 left-6">
        {formattedZipCode}
      </p>
      <img
        alt="VISA logo"
        src="src/assets/visa.png"
        className="absolute w-1/6 bottom-6 right-6"
      />
    </>
  )
}
