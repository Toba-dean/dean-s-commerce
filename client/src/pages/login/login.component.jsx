import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper, Title, Form, Input, Button, Links, ButtonContainer } from "./login.styles";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" type='password' />
          <ButtonContainer>
            <Button>LOGIN</Button>
            <Button>
              <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
                GO HOME
              </Link>
            </Button>
          </ButtonContainer>
          <Links>FORGOT PASSWORD?</Links>
          <Links>CREATE A NEW ACCOUNT</Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;