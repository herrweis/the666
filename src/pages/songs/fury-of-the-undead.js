import React from "react"
import { Helmet } from "react-helmet"
import MusicProviderLinks from "../../components/musicProviderLinks"
import styles from "./songs.module.scss"

export default function FuryOfTheUndead() {

  return (
    <div className={styles.music}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the666 — Fury Of The Undead Lyrics</title>
        <link rel="canonical" href="https://the666.band/songs/fury-of-the-undead" />
      </Helmet>
      <h1>Fury Of The Undead</h1>
      <div>
        <p>The dead shall rise<br/>
        the dead will rise<br/>
        awaken – awaken – awaken – awaken</p>

        <p>Blasphemic transformation<br/>
        into shades of deep black<br/>
        suffering<br/>
        waiting<br/>
        the prophets of doom<br/>
        unholy alliance is waiting at the gates of heaven</p>

        <p>The dead shall rise<br/>
        the dead will rise</p>

        <p>Flags of honor<br/>
        fury of the undead<br/>
        death of mankind<br/>
        fury of the undead</p>

        <p>Raise the corpse out of the grave<br/>
        the rotting flesh comes back to life<br/>
        un-human forms, the spawn of hell<br/>
        will kill bright light to satisfy<br/>
        the battle starts – one versus one<br/>
        dark power grows, the fall of men<br/>
        knee deep the gore, to wade across<br/>
        flag's fallen down – their hope is gone</p>

        <p>The dead shall rise<br/>
        the dead will rise<br/>
        fury of the undead<br/>
        fury of the undead</p>

        <p>Raise the corpse out of the grave<br/>
        the rotting flesh comes back to life<br/>
        un-human forms, the spawn of hell<br/>
        will kill bright light to satisfy<br/>
        the battle starts – one versus one<br/>
        dark power grows, the fall of men<br/>
        knee deep the gore, to wade across<br/>
        flag's fallen down – their hope is gone</p>

        <p>Fury of the undead</p>
      </div>
      <MusicProviderLinks spotify='https://open.spotify.com/track/7q5BoB1vpi8G9SKcl7Yf1n?si=HXMz4KliSbSxcoS1k0Qs_A' apple='https://music.apple.com/us/album/the666-ep/1523354885'/>
    </div>
  )
}
