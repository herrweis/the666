import React from "react"
import { Helmet } from "react-helmet"
import Skull from "../components/skull"

export default function Home() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the666 — Evil is rising from the dead</title>
        <link rel="canonical" href="https://the666.band" />
      </Helmet>
      <Skull />
    </div>
  )
}
