import React, { Component } from "react"

// import styles from "./tree.module.scss"

class Character extends Component {

  render () {
    return (
      <span>{this.props.symbol}</span>
    )

  }
}

export default Character
