import styled from "styled-components";
import { mobile } from "../../responsiveness/responsive";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-left: 5px;
  ${mobile({ display: "none" })}
`
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`
export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`
export const Image = styled.img`
  height: 80%;
`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
export const Title = styled.h1`
  font-size: 70px;
`
export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: .5;
  z-index: 10000;
`