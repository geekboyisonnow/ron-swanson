import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ron1 from './images/ron1.gif'
import ron2 from './images/ron2.jpg'
import ron3 from './images/ron3.jpg'
import ron4 from './images/ron4.jpg'
import ron5 from './images/ron5.jpg'
import ron6 from './images/ron6.jpg'
import ron7 from './images/ron7.jpg'
import ron8 from './images/ron8.jpg'
import ron9 from './images/ron9.jpg'
import ron10 from './images/ron10.jpg'
import ron11 from './images/ron11.jpg'
import ron12 from './images/ron12.jpg'
import ron13 from './images/ron13.jpg'
import ron14 from './images/ron14.jpg'
import ron15 from './images/ron15.jpg'
import ron16 from './images/ron16.jpg'
import ron17 from './images/ron17.jpg'
import ron18 from './images/ron18.jpg'
import ron19 from './images/ron19.jpg'
import ron20 from './images/ron20.jpg'
import ron21 from './images/ron21.jpg'
import axios from 'axios'
import meat from './images/meat-outline-filled.png'

class App extends Component {
  constructor(props) {
    super(props)

    this.rons = [
      ron1,
      ron2,
      ron3,
      ron4,
      ron5,
      ron6,
      ron7,
      ron8,
      ron9,
      ron10,
      ron11,
      ron12,
      ron13,
      ron14,
      ron15,
      ron16,
      ron17,
      ron18,
      ron19,
      ron20,
      ron21
    ]

    this.state = {
      quotes: [],
      image: ron1
    }
  }

  componentDidMount = () => {
    axios
      .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => {
        this.setState({
          quotes: response.data
        })
      })
  }

  _click = event => {
    // On Click Want to Refresh the Data
    axios
      .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => {
        let randomIndex = Math.floor(this.rons.length * Math.random())

        this.setState({
          quotes: response.data,
          image: this.rons[randomIndex]
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Swans
            <img src={meat} className="App-logo" alt="logo" />
            nisms
          </h1>
        </header>
        <div id="border">
          <img
            src={this.state.image}
            className="ronnie"
            alt="Ron-Swanson-Image"
          />
          <p id="quote">{this.state.quotes}</p>
          <button id="get-quote" value="1" onClick={this._click}>
            Vote for Swanson!
          </button>
        </div>
        <footer />
      </div>
    )
  }
}

export default App
