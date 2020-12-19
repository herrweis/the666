import React from "react"
import { Helmet } from "react-helmet"
import MusicProviderLinks from "../../components/musicProviderLinks"
import styles from "./songs.module.scss"

export default function HailToMario() {

  return (
    <div className={styles.music}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the666 — Hail To Mario Lyrics</title>
        <link rel="canonical" href="https://the666.band/songs/hail-to-mario" />
      </Helmet>
      <h1>Hail To Mario</h1>
      <div>
        <p>Mario – you are the only one<br/>
        in the fallen universe<br/>
        to fix what Bowser did<br/>
        Mario – you are the only one<br/>
        in this fallen universe<br/>
        to fix what Bowser did<br/>
        to me</p>

        <p>Peach – your golden shiny hair<br/>
        drives me insane – I care<br/>
        death shows his rotten head<br/>
        I beat you 'till you're dead</p>

        <p>Scorn – you make me angry<br/>
        the blood rinse down the alley<br/>
        snap – your backbone's ruptured<br/>
        your guts are squeezed to slobber</p>

        <p>Hammer – check<br/>
        saw – check<br/>
        chain – check<br/>
        dismembered and released<br/>
        I kill you – I kill you – I kill you</p>

        <p>Now you're dead</p>

        <p>Mario – you were the only one<br/>
        in this rotten universe<br/>
        to fix what Bowser did</p>

        <p>Left alone with evil monster<br/>
        fearful tear, will live forever<br/>
        loneliness, light turns to emptiness</p>

        <p>You failed</p>
      </div>
      <MusicProviderLinks spotify='https://open.spotify.com/track/4Qq6OwsHaxqKyuCm9ngIiw?si=fPjGASdGRPi8B85twKTDew' apple='https://music.apple.com/us/album/the666-ep/1523354885'/>
    </div>
  )
}
