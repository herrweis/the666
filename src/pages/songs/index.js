import React from "react"
import { Helmet } from "react-helmet"
import styles from "./songs.module.scss"

export default function Songs() {

  return (
    <div className={styles.list}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the666 — EP</title>
        <link rel="canonical" href="https://the666.band/songs" />
      </Helmet>
      <ul>
        <li><a href="blood-of-the-machine">Blood Of The Machine</a></li>
        <li><a href="taking-your-life-tonight">Taking Your Life Tonight</a></li>
        <li><a href="fury-of-the-undead">Fury Of The Undead</a></li>
        <li><a href="hail-to-mario">Hail To Mario</a></li>
        <li><a href="flashes-from-the-sky">Flashes From The Sky</a></li>
        <li><a href="fisting-the-reaper">Fisting The Reaper</a></li>
      </ul>
    </div>
  )
}
