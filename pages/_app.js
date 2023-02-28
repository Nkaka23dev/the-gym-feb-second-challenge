import Layout from '@/components/Layout'
import '@/styles/globals.css'
import localFont from '@next/font/local'

const myFont = localFont({ src: '../public/CircularXXWeb-Book.woff2', display: 'swap' })

export default function App({ Component, pageProps }) {
  return <Layout>
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  </Layout>
}
