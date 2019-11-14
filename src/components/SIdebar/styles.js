import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 20px;
  color: #fff;

  display: flex;
  flex: 1;
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child {
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;

      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: #fff;
      }
    }
  }
`;
