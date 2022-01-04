import * as React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"

// markup
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}

export default IndexPage
