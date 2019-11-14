import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav } from './styles';

export default function SIdebar() {
  return (
    <Container>
      <Nav main>
        <li>
          <Link to="/">Pagina Inicial</Link>
        </li>
        <li>
          <Link to="/posts">Fotos</Link>
        </li>
        <li>
          <Link to="/posts/1">Videos</Link>
        </li>
      </Nav>
    </Container>
  );
}
