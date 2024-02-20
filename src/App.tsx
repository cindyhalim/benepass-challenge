import { useState } from 'react'

import Button from './components/Button'
import Custom from './features/Custom'
import Example from './features/Example'

type Page = 'example' | 'custom'

export default function App() {
  const [page, setPage] = useState<Page>('example')
  const BUTTON_TEXT = page === 'example' ? "Cindy's take ✨" : 'Example'

  function handleOnClick() {
    if (page === 'example') {
      setPage('custom')
    } else {
      setPage('example')
    }
  }

  return (
    <div className="relative px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-16">
      <Button onClick={handleOnClick}>{BUTTON_TEXT}</Button>
      {page === 'example' ? <Example /> : <Custom />}
    </div>
  )
}
