import React, { Component } from "react"
// import Character from "./character"
// import Space from "./space"
import SkullData from "./skullData"
import styles from "./skull.module.scss"

class Skull extends Component {

  constructor(props) {
    super(props);

    this.density = 3;

    // this.symbols = ["*", "@", "X", "#", "+", "/", ":", "&", "%", "$", "?"];
    this.symbols = ["t", "h", "e", "6", "6", "6"];
    // this.colours = ["white", "green", "blue", "aqua", "yellow", "red"];
    this.symbolsLength = this.symbols.length;

    this.state = {
      symbol: (this.symbols[Math.floor(Math.random() * this.symbolsLength)]),
      symbols: this.symbols
      // symbol: '6'
    }

    this.skullImage = [];
    this.currentKey = 1;
    this.currentSymbol = 0;
    this.buildFullSkullImage();
  }

  componentDidMount() {
    // this.intervalID = setInterval(
    // 	() => this.toggleSymbol(),
    // 	200
    // );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
	}

  shuffle(arr) {
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
  };

  toggleSymbol() {
    this.setState({
      symbols: this.shuffle(this.symbols)
    })
  };

  getCurrentSymbol () {
    let current;
    if (this.currentSymbol < this.state.symbols.length) {
      current = this.state.symbols[this.currentSymbol];
    } else {
      current = this.state.symbols[0];
      this.currentSymbol = 0;
    }
    ++this.currentSymbol;
    return current;
  }

  buildFullSkullImage() {
    let i;
    for (i = 0; i < SkullData.length; i++) {
      this.buildLines(SkullData[i]);
    }
  }

  buildLines(sequence) {
    let i,j,k;
    for (i = 0; i < this.density; i++) {
      let tmpLine = [];
      for (j = 0; j < sequence.length; j++) {
        for (k = 0; k < this.density; k++) {
          tmpLine.push(sequence[j]);
        }
      }
      this.skullImage.push(tmpLine);
    }
  }

  renderLine(dataLine) {
    ++this.currentKey;
    return (
      <div key={this.currentKey}>
      {
        Object.keys(dataLine).map(i => {
          ++this.currentKey;
          // return <span key={this.currentKey}>{dataLine[i] === 1 ? this.state.symbols[Math.floor(Math.random() * this.state.symbols.length)] : " "}</span>
          return <span key={this.currentKey}>{dataLine[i] === 1 ? this.getCurrentSymbol() : " "}</span>
        })
      }
      </div>
    )
  }

  render() {
    return (
      <div className={styles.skull}>
        {this.skullImage.map(dataLine => {
          return this.renderLine(dataLine)
        })}
      </div>
    )
  }
}

export default Skull
