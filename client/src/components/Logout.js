import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
const Logout = () => {
  useEffect(() => {
    sessionStorage.clear();
    window.location.href = '/';
  }, []);
  return (
    <Container>
      <NavigationBar />
    </Container>
  );
};

export default Logout;
