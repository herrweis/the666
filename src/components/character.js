import React, { Component } from "react"

// import styles from "./tree.module.scss"

class Character extends Component {

  constructor(props) {
    super(props);
  }

  render () {

    return (
      <span>{this.props.symbol}</span>
    )

  }
}

export default Character
