import Layout from '../components/Layout'
import Prices from '../components/Prices'
import axios from 'axios'

const Index = props => {
  return (
    <Layout>
      <div>
        <h1>Welcome to BitzPrice</h1>
        <Prices bpi={props.bpi} />
      </div>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  const res = await axios.get(
    'https://api.coindesk.com/v1/bpi/currentprice.json'
  )

  return {
    bpi: res.data
  }
}

export default Index
