import React from 'react'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Center, Container, Language, Left, Right, Wrapper, SearchContainer, Input, Logo, MenuItem } from './navbar.styles'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color: "gray", fontSize: "16px"}} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to='/' style={{color: 'black', textDecoration: 'none'}}>
            <Logo>DEAN.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to='/register' style={{color: 'black', textDecoration: 'none'}}>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to='/login' style={{color: 'black', textDecoration: 'none'}}>
            <MenuItem>Sign In</MenuItem>
          </Link>
          <MenuItem>
            <Link to='/cart' style={{color: 'black'}}>
              <Badge badgeContent='3' color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
