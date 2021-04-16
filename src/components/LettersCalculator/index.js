// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    length: 0,
  }

  onInputChange = event => {
    const lengthOfInput = event.target.value.length
    this.setState({length: lengthOfInput})
  }

  renderLength = () => {}

  render() {
    const {length} = this.state
    return (
      <div className="bg-container">
        <div className="letters-calculator-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="letterInput" className="label">
              Enter the phrase
            </label>
            <input
              id="letterInput"
              className="input"
              placeholder="Enter the phrase"
              type="text"
              onChange={this.onInputChange}
            />
            <p className="letter-count">No.of letters: {length}</p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
