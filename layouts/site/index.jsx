import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

function SiteLayout({ children }) {
  const links = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Contact',
      url: '/contact',
    },
  ]
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b">
        <Navbar links={links} />
      </header>
      <main className="flex flex-grow">{children}</main>
      <Footer />
    </>
  )
}

export default SiteLayout