import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <div>
        <Card className='bg-dark'>
          <Card.Img
            src='/tiktok.PNG'
            alt='Card image'
            style={{ cursor: 'pointer' }}
            onClick={() =>
              (window.location.href = 'https://linktr.ee/dea.afrizal')
            }
          />
        </Card>
        <Col>
          <Card>
            <Card.Img
              src='/youtube.png'
              className='hvr-img'
              onClick={() =>
                (window.location.href = 'https://www.youtube.com/c/deaafrizal')
              }
            />
            <Card.Body>
              <Card.Title>Subscribe</Card.Title>
              <Card.Text>
                Bulan ini bakalan fokus di youtube dulu untuk share knowledge
                seputar apapun, jadi kalau bisa pantengin aja disana. So, pas
                nanti course open lagi, dan akan berkaitan dengan materi2 di
                youtube 💪
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              src='/instagram.png'
              className='hvr-img'
              onClick={() =>
                (window.location.href =
                  'https://www.instagram.com/dea.afrizal/')
              }
            />
            <Card.Body>
              <Card.Title>Follow</Card.Title>
              <Card.Text>
                Course akan selalu di update via story IG + tiktok video. Dan
                pasti nanti bakalan lebih menarik lagi materinya, So stay tune
                terus oke 🤪
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Home;
