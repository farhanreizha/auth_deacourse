import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import { getDetail } from '../helper/user';
const Dashboard = () => {
  const [getData, setData] = useState([]);

  useEffect(() => {
    if (
      !sessionStorage.getItem('username') &&
      !sessionStorage.getItem('id') &&
      !sessionStorage.getItem('token')
    ) {
      window.location.href = '/';
    }
    const data = {
      username: sessionStorage.getItem('username'),
      token: sessionStorage.getItem('token'),
    };
    getDetail('http://localhost:3001/users/detail', data).then((result) => {
      setData(result.data);
    });
  }, []);

  return (
    <Container>
      <NavigationBar />
      <h1>HI {sessionStorage.getItem('username')}</h1>
      <div>
        <ul>
          <li>nama lengkap: {getData.fullname}</li>
          <li>nomor telepon: 0{getData.phone}</li>
          <li>catatan: {getData.note}</li>
        </ul>
      </div>
    </Container>
  );
};

export default Dashboard;
