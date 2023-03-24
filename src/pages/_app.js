import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Nunito_Sans } from 'next/font/google'
import { Header } from '@components/header'

config.autoAddCss = false
const nunitoSans = Nunito_Sans({
  weight: ['300', '600', '800'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={nunitoSans.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  )
}
