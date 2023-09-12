import { setupClient } from '@rewordlabs/react/client'

export const { tx, changeLocale, useLocaleSync } = setupClient({
  locale: 'en',
  loader: (locale: string, id: string) =>
    import(`./${locale}/${id}.json`).then((msg) => msg.default[id]),
})
