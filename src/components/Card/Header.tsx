import Pill from './Pill'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <img alt="Benepass logo" src="/assets/logo.png" className="w-1/3" />
      <Pill />
    </div>
  )
}
