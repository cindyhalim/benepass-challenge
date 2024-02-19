const TEXT = 'Virtual'

export default function Pill() {
  return (
    <div className="flex items-center px-3 py-1 bg-white rounded-full">
      <p className="text-xs font-medium text-brand xs:text-sm sm:text-base">
        {TEXT}
      </p>
    </div>
  )
}
