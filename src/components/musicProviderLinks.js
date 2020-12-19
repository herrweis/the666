import React, { Component } from "react"
import SpotifySVG from "./spotify.inline.svg";
import AppleSVG from "./apple_music.inline.svg";

import styles from "./musicProviderLinks.module.scss"

class MusicProviderLinks extends Component {

  render () {
    return (
      <ul className={styles.provider}>
        <li className={styles.spotify}><a href={this.props.spotify}><SpotifySVG /></a></li>
        <li className={styles.apple}><a href={this.props.apple}><AppleSVG /></a></li>
      </ul>
    )

  }
}

export default MusicProviderLinks
