import React from "react"
import { Helmet } from "react-helmet"
import Skull from "../components/skull"
import MusicProviderLinks from "../components/musicProviderLinks"

export default function Music() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the666 — Evil is rising from the dead</title>
        <link rel="canonical" href="https://the666.band/music" />
      </Helmet>
      <Skull />
      <MusicProviderLinks spotify='https://open.spotify.com/album/2wRc2fk5RVzelGM9QHNOk8?si=yqC2w71xQXSO7Ufk4XPqKA' apple='https://music.apple.com/us/album/the666-ep/1523354885'/>
    </div>
  )
}
