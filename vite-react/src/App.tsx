import { setLocale, useTs } from '@terai/react'
import { Suspense } from 'react'

export default function App() {
  const { ts } = useTs()

  return (
    <Suspense fallback={<span>{'Loading...'}</span>}>
      <div>
        <span>{ts`Hello world!`}</span>

        <div className={'buttons'}>
          <button onClick={() => setLocale('es-ES')}>ES</button>
          <button onClick={() => setLocale('en-US')}>EN</button>
          <button onClick={() => setLocale('ja-JP')}>JP</button>
        </div>
      </div>
    </Suspense>
  )
}
