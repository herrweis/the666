import React from "react"
import { Helmet } from "react-helmet"
import MusicProviderLinks from "../../components/musicProviderLinks"
import styles from "./songs.module.scss"

export default function Songs() {

  return (
    <div className={styles.music}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the666 — EP</title>
        <link rel="canonical" href="https://the666.band/songs" />
      </Helmet>
      <ul className={styles.list}>
        <li><a href="/songs/blood-of-the-machine">Blood Of The Machine</a></li>
        <li><a href="/songs/taking-your-life-tonight">Taking Your Life Tonight</a></li>
        <li><a href="/songs/fury-of-the-undead">Fury Of The Undead</a></li>
        <li><a href="/songs/hail-to-mario">Hail To Mario</a></li>
        <li><a href="/songs/flashes-from-the-sky">Flashes From The Sky</a></li>
        <li><a href="/songs/fisting-the-reaper">Fisting The Reaper</a></li>
      </ul>
      <MusicProviderLinks spotify='https://open.spotify.com/album/2wRc2fk5RVzelGM9QHNOk8?si=yqC2w71xQXSO7Ufk4XPqKA' apple='https://music.apple.com/us/album/the666-ep/1523354885'/>
    </div>
  )
}
