import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'
import { themes } from '../styles/ColorStyles'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={themes}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default MyApp
