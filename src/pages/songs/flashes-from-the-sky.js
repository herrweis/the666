import React from "react"
import { Helmet } from "react-helmet"
import MusicProviderLinks from "../../components/musicProviderLinks"
import styles from "./songs.module.scss"

export default function FlashesFromTheSky() {

  return (
    <div className={styles.music}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the666 — Flashes From The Sky Lyrics</title>
        <link rel="canonical" href="https://the666.band/songs/flashes-from-the-sky" />
      </Helmet>
      <h1>Flashes From The Sky</h1>
      <div>
        <p>Army of the unknown<br/>
        shelter to the mankind<br/>
        men lost their faith<br/>
        curse of disbelieving</p>

        <p>I send flashes from the sky<br/>
        down to earth<br/>
        to bring back the respect<br/>
        for us ancient gods</p>

        <p>Tyr – the slayer with the sword<br/>
        relentless to those renegades<br/>
        fulfill their destiny<br/>
        angel of death – left them all in agony<br/>
        drenched with blood</p>

        <p>I send flashes from the sky<br/>
        down to earth<br/>
        to bring back the respect<br/>
        for us ancient gods</p>

        <p>Disbeliever full resistance<br/>
        left this world – no coexistence<br/>
        thunderstorm and lightning’s chaos<br/>
        hammer fall – ‘cause they betrayed us</p>

        <p>Odin – the maker of the world<br/>
        creator of all life<br/>
        where is their gratitude?<br/>
        your order – is clear – re-people of the world<br/>
        knee fall to the spear</p>

        <p>I send flashes from the sky<br/>
        down to earth<br/>
        to bring back the respect<br/>
        for us ancient gods</p>

        <p>Flash<br/>
        from – the – sky</p>

        <p>Odin – god of the gods<br/>
        Thor – thunder – storm – light<br/>
        Tyr – unsheathe your sword<br/>
        a new era</p>

        <p>Re-creation of the world<br/>
        the price was paid with blood<br/>
        gods wrest sanity<br/>
        odin’s back on throne</p>
      </div>
      <MusicProviderLinks spotify='https://open.spotify.com/track/58fTFtSDDPi2MSTgohxqwF?si=EeYZOIV0SK2nCjqVoqETjg' apple='https://music.apple.com/us/album/the666-ep/1523354885'/>
    </div>
  )
}
