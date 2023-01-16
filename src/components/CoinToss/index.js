import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: true, total: 0, heads: 0, tails: 0}

  onClickTossButton = () => {
    const number = Math.floor(Math.random() * 2)
    console.log(number)
    if (number === 0) {
      this.setState(PrevState => ({
        isHead: true,
        total: PrevState.total + 1,
        heads: PrevState.heads + 1,
      }))
    } else if (number === 1) {
      this.setState(PrevState => ({
        isHead: false,
        total: PrevState.total + 1,
        tails: PrevState.tails + 1,
      }))
    }
  }

  render() {
    const {isHead, total, heads, tails} = this.state

    const img = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={img} alt="toss result" className="image" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
