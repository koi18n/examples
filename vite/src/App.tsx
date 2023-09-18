import { setLocale, tx } from './reword'
import { Suspense } from 'react'

export default function App() {
  const name = 'Reword'

  return (
    <Suspense fallback={<span>{'Loading...'}</span>}>
      <div>
        <span>{tx`Hello world!`}</span>
        <span>{tx`Hello <strong>world</strong>! This is ${name}!`}</span>

        <div className={'buttons'}>
          <button onClick={() => setLocale('es')}>ES</button>
          <button onClick={() => setLocale('en')}>EN</button>
        </div>
      </div>
    </Suspense>
  )
}
