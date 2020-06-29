import React, { Component } from "react"

// import styles from "./tree.module.scss"

class Character extends Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.symbols = ["@", "X", "x", "6", "#", "+"];
  //   this.symbolsLength = this.symbols.length;
  //
  //   this.state = {
  //     symbol: (this.symbols[Math.floor(Math.random() * this.symbolsLength)])
  //     // symbol: '6'
  //   }
  // }
  //
  // componentDidMount() {
  //   // this.intervalID = setInterval(
  //   // 	() => this.toggleSymbol(),
  //   // 	(Math.random() * 10)
  //   // );
  // }
  //
  // componentWillUnmount() {
  //   // clearInterval(this.intervalID);
	// }
  //
  // toggleSymbol() {
  //   let currentSymbol = this.state.symbol;
  //   let tmpSymbols = this.symbols.filter(function(value){ return value != currentSymbol});
  //
  //   this.setState({
  //     symbol: (tmpSymbols[Math.floor(Math.random() * tmpSymbols.length)])
  //   })
  // };

  render () {

    return (
      <span>{this.props.symbol}</span>
    )

  }
}

export default Character
