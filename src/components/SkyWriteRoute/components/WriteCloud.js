import React, { useRef } from "react"
import styled, { keyframes } from "styled-components/macro"

import cloud0 from "assets/cloudBitmaps/cloud-0.png"
import cloud1 from "assets/cloudBitmaps/cloud-1.png"
import cloud2 from "assets/cloudBitmaps/cloud-2.png"
import cloud3 from "assets/cloudBitmaps/cloud-3.png"
import cloud4 from "assets/cloudBitmaps/cloud-4.png"

const cloudBitmaps = [cloud0, cloud1, cloud2, cloud3, cloud4]

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const fadeIn = finalOpacity => keyframes`
  from {opacity: 0}
  to {opacity: ${finalOpacity}}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.7) translateX(${props => props.horizontalOffset}vw);
  filter: brightness(${props => props.brightness});
  opacity: 0;
  animation: ${props => fadeIn(props.opacity)} 2.5s ease-out forwards;
  animation-delay: ${props => props.delay}s;
`

export default function WriteCloud(props) {
  const { delay } = props

  const image = useRef(
    cloudBitmaps[Math.floor(Math.random() * cloudBitmaps.length)]
  )
  const brightness = useRef(Math.random() * 0.35 + 1.1)
  const opacity = useRef(Math.random() * 0.5 + 0.95)
  const horizontalOffset = useRef(Math.random() * 0.5 - 0.5 / 2)

  return (
    <Container>
      <Image
        src={image.current}
        brightness={brightness.current}
        opacity={opacity.current}
        delay={delay}
        horizontalOffset={horizontalOffset.current}
      />
    </Container>
  )
}
