// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  drawMoney = () => {
    const {value, deductMoney} = this.props
    deductMoney(value)
  }

  render() {
    const {value} = this.props
    return (
      <li className="button-container">
        <button onClick={this.drawMoney} type="button" className="button">
          {value}
        </button>
      </li>
    )
  }
}
export default DenominationItem
