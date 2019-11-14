import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Search, Painer, FormInput } from './styles';

import LogoIcon from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={LogoIcon} alt="Tebby" />
        </Link>
      </Logo>
      <Search>
        <FormInput>
          <input
            type="text"
            name="search"
            placeholder="Quer buscar algo?"
            autoComplete="off"
          />
        </FormInput>
      </Search>
      <Painer>
        <ul>
          <li>Pagina Inicial</li>
          <li>Videos</li>
          <li>Fotos</li>
        </ul>
      </Painer>
    </Container>
  );
}
