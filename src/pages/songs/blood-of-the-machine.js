import React from "react"
import { Helmet } from "react-helmet"
import MusicProviderLinks from "../../components/musicProviderLinks"
import styles from "./songs.module.scss"

export default function BloodOfTheMachine() {

  return (
    <div className={styles.music}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the666 — Blood Of The Machine Lyrics</title>
        <link rel="canonical" href="https://the666.band/songs/blood-of-the-machine" />
      </Helmet>
      <h1>Blood Of The Machine</h1>
      <div>
        <p>Dark sphere filled with vapour<br/>
        and mental torture<br/>
        remaining hope<br/>
        punished and scared to death<br/>
        no hope for absolution<br/>
        no hope for recreation</p>

        <p>Connection – established<br/>
        link – set – now listen<br/>
        no evil storm can last forever<br/>
        if power's missing<br/>
        you sacrifice<br/>
        no torture without the power</p>

        <p>This is the time<br/>
        my bloody master<br/>
        light is defeated by the storm</p>

        <p>Blood of the machine<br/>
        feeds the darkest needs<br/>
        black and thick and sweet<br/>
        and more than just orgasmic<br/>
        blood of the machine<br/>
        don't leave me alone<br/>
        I need – I will – I kill<br/>
        lost soul – the evil slaughter</p>

        <p>Once holy, clean and filled with light<br/>
        now broken, beaten sick of life<br/>
        betray the path<br/>
        reveal the sin<br/>
        to feed the death with blood of the machine</p>

        <p>Machine – machine – machine</p>

        <p>The blood of the machine</p>

        <p>This is the time<br/>
        my bloody master<br/>
        light is defeated by the storm</p>

        <p>Blood of the machine<br/>
        feeds the darkest needs<br/>
        black and thick and sweet<br/>
        and more than just orgasmic<br/>
        blood of the machine<br/>
        don't leave me alone<br/>
        I need – I will – I kill<br/>
        lost soul – the evil slaughter</p>

        <p>Blood of the machine</p>

        <p>Blood!</p>
        <p>Of the machine!</p>
      </div>
      <MusicProviderLinks spotify='https://open.spotify.com/track/580ZIbi66STESq66ZoJpEC?si=1VU8TzTSRYmMo4WVSc332g' apple='https://music.apple.com/us/album/the666-ep/1523354885'/>
    </div>
  )
}
