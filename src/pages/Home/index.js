import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Avatar, Content } from './styles';

export default function Home() {
  return (
    <Container>
      <Card>
        <Avatar>
          <Link to="/posts/1">
            <div>
              <img
                src="https://scontent-gru2-2.cdninstagram.com/vp/d9838fa20300835a22a13fe89d65ed0f/5E480E25/t51.2885-19/s150x150/72485735_962995454034269_4369746786907062272_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com"
                alt="Mateus"
              />
            </div>
          </Link>
        </Avatar>
        <Content />
      </Card>
      <Card>
        <Avatar>
          <Link to="/posts/1">
            <div>
              <img
                src="https://scontent-gru2-2.cdninstagram.com/vp/d9838fa20300835a22a13fe89d65ed0f/5E480E25/t51.2885-19/s150x150/72485735_962995454034269_4369746786907062272_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com"
                alt="Mateus"
              />
            </div>
          </Link>
        </Avatar>
        <Content />
      </Card>
      <Card>
        <Avatar>
          <Link to="/posts/1">
            <div>
              <img
                src="https://scontent-gru2-2.cdninstagram.com/vp/d9838fa20300835a22a13fe89d65ed0f/5E480E25/t51.2885-19/s150x150/72485735_962995454034269_4369746786907062272_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com"
                alt="Mateus"
              />
            </div>
          </Link>
        </Avatar>
        <Content />
      </Card>
      <Card>
        <Avatar>
          <Link to="/posts/1">
            <div>
              <img
                src="https://scontent-gru2-2.cdninstagram.com/vp/d9838fa20300835a22a13fe89d65ed0f/5E480E25/t51.2885-19/s150x150/72485735_962995454034269_4369746786907062272_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com"
                alt="Mateus"
              />
            </div>
          </Link>
        </Avatar>
        <Content />
      </Card>
    </Container>
  );
}
