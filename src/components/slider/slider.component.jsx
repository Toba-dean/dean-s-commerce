import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { sliderPrev } from '../../redux/slider/slider.selector'

import { Container, Arrow, Wrapper, Slide, ImageContainer, InfoContainer, Image, Title, Description, Button } from './slider.styles'

const Slider = ({ sliderItems }) => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
 
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
          sliderItems.map(({ id, img, title, desc, bg }) => {
            return(
              <Slide key={id} bg={bg}>
                <ImageContainer>
                  <Image src={img} />
                </ImageContainer>
                <InfoContainer>
                  <Title>{title}</Title>
                  <Description>{desc}</Description>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
              </Slide>
            )
          })
        }
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  sliderItems: sliderPrev
})

export default connect(mapStateToProps)(Slider)


