import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { setupTerai } from '@terai/react'

setupTerai({
	defaultLocale: 'en-US',
	persistence: true,
	loader: (locale: string, id: string) =>
		import(
			`../locale/${locale}/${id}.json`
		).then((module) => module.default)
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
