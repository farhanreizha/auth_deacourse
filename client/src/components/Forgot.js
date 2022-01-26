import { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { getDetail, update } from '../helper/user';
import NavigationBar from './NavigationBar';

const Forgot = () => {
  const [getData, setData] = useState('');
  const [getPassword, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const data = {
      username: sessionStorage.getItem('username'),
      password: sessionStorage.getItem('password'),
      token: sessionStorage.getItem('token'),
    };
    getDetail('http://localhost:3001/users/detail', data).then((result) => {
      setData(result.data);
    });
  }, []);

  const onSubmit = () => {
    setIsLoading(true);
    const data = {
      id: sessionStorage.getItem('id'),
      password: getPassword,
      token: sessionStorage.getItem('token'),
    };
    update('http://localhost:3001/users/change-password/:id', data).then(
      (result) => {
        sessionStorage.setItem('id', result.data.id);
        sessionStorage.setItem('password', result.data.password);
        sessionStorage.setItem('token', result.data.token);
        setTimeout(() => {
          setIsLoading(false);
          window.location.href = '/dashboard';
        }, 1000);
      }
    );
  };

  return (
    <>
      <NavigationBar />
      <Container>
        <h1>Forgot Password</h1>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Password Baru</Form.Label>
            <Form.Control
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='masukan password baru'
            />
          </Form.Group>
        </Form>
        <Button onClick={onSubmit}>
          {isLoading ? (
            <div className='spinner-border mt-2 text-light' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          ) : (
            'Submit'
          )}
        </Button>
      </Container>
    </>
  );
};

export default Forgot;
