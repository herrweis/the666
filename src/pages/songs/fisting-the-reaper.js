import React from "react"
import { Helmet } from "react-helmet"
import MusicProviderLinks from "../../components/musicProviderLinks"
import styles from "./songs.module.scss"

export default function FistingTheReaper() {

  return (
    <div className={styles.music}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the666 — Fisting The Reaper Lyrics</title>
        <link rel="canonical" href="https://the666.band/songs/fisting-the-reaper" />
      </Helmet>
      <div>
        <h1>Fisting The Reaper</h1>
        <div>
          <p>Fist of the reaper
          your hopeless fight<br/>
          fist of the reaper<br/>
          before the end of the night<br/>
          of the reaper<br/>
          you'll loose your life<br/>
          fist of the reaper<br/>
          a torso chopped into half</p>

          <p>Your face stuck with needles<br/>
          warped in endless pain<br/>
          blade scores flesh and sorrow<br/>
          don't you worry<br/>
          to hack and slay is my profession</p>

          <p>One step closer<br/>
          this is true artwork<br/>
          stars are observing the meaning of beauty<br/>
          fist of the reaper<br/>
          creates new life<br/>
          with scorn of hatred</p>

          <p>This is the fist of the reaper<br/>
          brings pain and misery<br/>
          we are fisting the reaper<br/>
          sophistication is the one thing to be</p>

          <p>Hack these limbs off – evisceration<br/>
          so talented – I can't believe what I've done<br/>
          it's great<br/>
          I'm so fucking great – I'm god – who's your master now</p>

          <p>One step closer<br/>
          this is true artwork<br/>
          stars are observing the meaning of beauty<br/>
          fist of the reaper<br/>
          creates new life<br/>
          with scorn of hatred</p>

          <p>Fist of the reaper<br/>
          brings pain to you<br/>
          nights fallen down<br/>
          the prison of glory</p>
        </div>
        <MusicProviderLinks spotify='https://open.spotify.com/track/2z4obGg0Aa86StFXkBLA88?si=0AT7fitnRYa2MhG1Xn-8SA' apple='https://music.apple.com/us/album/the666-ep/1523354885'/>
      </div>
    </div>
  )
}
