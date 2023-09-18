import { defineConfig } from '@rewordlabs/dev'

export default defineConfig({
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  projectLocale: 'en',
  outDir: './src/locale',
  openaiApiKey: process.env.OPENAI_API_KEY as string,
  locales: ['es'],
})
