import React from "react"
import styled from "styled-components/macro"

import Cloud from "components/Cloud"
import cloud4 from "assets/clouds/cloud4.png"
import cloud5 from "assets/clouds/cloud5.png"

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export default function GapClouds(props) {
  const { offset } = props

  return (
    <Container>
      <Cloud
        image={cloud5}
        y={20}
        xInit={70}
        layer={11}
        offset={offset}
        style={{ height: "20vh" }}
      />
      <Cloud
        image={cloud4}
        y={95}
        xInit={25}
        layer={2}
        offset={offset}
        style={{ height: "34vh" }}
      />
    </Container>
  )
}
