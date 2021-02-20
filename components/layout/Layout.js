import Head from 'next/head'

import Header from './Header'

export default function Layout({ children, title }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>{children}</main>
		</>
	)
}
