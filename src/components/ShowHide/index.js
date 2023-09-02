// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  onLastName = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="show-hide-bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="name-bg-container">
          <button type="button" className="button" onClick={this.onFirstName}>
            Show/Hide Firstname
          </button>
          {firstName ? <p className="show-name-container">Joe</p> : ''}
        </div>
        <div className="name-bg-container">
          <button type="button" className="button" onClick={this.onLastName}>
            Show/Hide Lastname
          </button>
          {lastName ? <p className="show-name-container">Jonas</p> : ''}
        </div>
      </div>
    )
  }
}

export default ShowHide
