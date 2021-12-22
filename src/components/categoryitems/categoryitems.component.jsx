import React from 'react'
import { Container, Image, Info, Title, Button } from './categoryitems.styles'
export const CategoryItems = ({ item: { img, title } }) => {
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}
