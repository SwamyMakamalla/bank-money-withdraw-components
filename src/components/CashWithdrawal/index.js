import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 2000,
    }
  }

  handleWithdraw = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="name-main-container">
            <div className="name-container">S</div>
            <h1 className="heading">sarah Williams</h1>
          </div>
          <div className="balance-text-container">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="balance-num">{amount}</p>
              <p className="rupee-text">In rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw-text">Withdraw</p>
            <p className="balance-text">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="list-button-container">
            {denominationsList.map(eachElement => (
              <DenominationItem
                deductMoney={this.handleWithdraw}
                value={eachElement.value}
                key={eachElement.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
