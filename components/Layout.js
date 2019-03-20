import Navbar from './Navbar'
import Head from 'next/head'

const Layout = props => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
      </Head>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
