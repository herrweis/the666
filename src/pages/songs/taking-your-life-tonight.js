import React from "react"
import { Helmet } from "react-helmet"
import MusicProviderLinks from "../../components/musicProviderLinks"
import styles from "./songs.module.scss"

export default function TakingYourLifeTonight() {

  return (
    <div className={styles.music}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the666 — Taking Your Life Tonight Lyrics</title>
        <link rel="canonical" href="https://the666.band/songs/taking-your-life-tonight" />
      </Helmet>
      <h1>Taking Your Life Tonight</h1>
      <div>
        <p>Overwhelming fantasies<br/>
        awaiting dark knights wish<br/>
        restlessness my inner self<br/>
        chasing constantly</p>

        <p>Blood – lust</p>

        <p>Alright</p>

        <p>Predator of the night<br/>
        tracing – to fail is not an option<br/>
        shadow is the guard<br/>
        sequence – not terminated</p>

        <p>Taking your life tonight<br/>
        desire<br/>
        taking your life tonight<br/>
        admire<br/>
        taking your life tonight</p>

        <p>Wash away these useless creatures<br/>
        they did not understand<br/>
        their eyes wide open – deeply scared<br/>
        truth hurts – this is the consequence</p>

        <p>Prepare</p>

        <p>Predator of the night<br/>
        tracing – to fail is not an option<br/>
        shadow is the guard<br/>
        sequence – not terminated</p>

        <p>Taking your life tonight<br/>
        taking your life tonight<br/>
        taking your life tonight</p>

        <p>The silence</p>
      </div>
      <MusicProviderLinks spotify='https://open.spotify.com/track/4bY63lzZ6D89iyjdBpnnYz?si=vH4RlwWDSyGvBkmta8RBCw' apple='https://music.apple.com/us/album/the666-ep/1523354885'/>
    </div>
  )
}
