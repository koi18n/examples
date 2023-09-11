import { changeLocale, tx } from '../locale/client'
import { Suspense } from 'react'

export default function App() {
  const name = 'Reword'

  return (
    <Suspense fallback={<span>{'Loading...'}</span>}>
      <div>
        <span>{tx({
          context: 'react',
        })`Hello <strong>world</strong>! This is ${name}!`}</span>

        <div className={'buttons'}>
          <button onClick={() => changeLocale('es')}>ES</button>
          <button onClick={() => changeLocale('en')}>EN</button>
        </div>
      </div>
    </Suspense>
  )
}
