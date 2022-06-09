import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper, Title, Form, Input, Agreement, Button, ButtonContainer } from "./register.styles";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" type='email' />
          <Input placeholder="password" type='password' />
          <Input placeholder="confirm password" type='password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <ButtonContainer>
            <Button>CREATE</Button>
            <Button>
              <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
                GO HOME
              </Link>
            </Button>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;