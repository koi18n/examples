import { defineConfig, createGoogleCloudTranslator } from '@terai/dev'

const translator = createGoogleCloudTranslator({})

export default defineConfig({
	include: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	exclude: [],
	projectLocale: 'en-US',
	outLocales: [
		'es-ES',
		'ja-JP',
	],
	outDir: './locale',
	translator
})
