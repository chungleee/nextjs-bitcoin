class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {
    let list = ''

    if (this.state.currency === 'USD') {
      list = (
        <li>
          Bitcoin rate for {this.props.bpi.bpi.USD.description}:{' '}
          {this.props.bpi.bpi.USD.rate}
        </li>
      )
    } else if (this.state.currency === 'GBP') {
      list = (
        <li>
          Bitcoin rate for {this.props.bpi.bpi.GBP.description}:{' '}
          {this.props.bpi.bpi.GBP.rate}
        </li>
      )
    } else if (this.state.currency === 'EUR') {
      list = (
        <li>
          Bitcoin rate for {this.props.bpi.bpi.EUR.description}:{' '}
          {this.props.bpi.bpi.EUR.rate}
        </li>
      )
    }

    return (
      <div>
        <ul>{list}</ul>
        <br />
        <select
          onChange={event => {
            this.setState({
              currency: event.target.value
            })
          }}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    )
  }
}

export default Prices
