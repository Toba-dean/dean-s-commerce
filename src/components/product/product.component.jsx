import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react'
import { Container, Circle, Image, Info, Icon } from "./product.styles";

export const Product = ({ item: { img} }) => {
  return (
    <Container>
      <Circle />
      <Image src={img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}
