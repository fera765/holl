import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  margin-left: 10px;
  flex-flow: column nowrap;
  display: flex;
  flex: 4;
`;

export const Card = styled.div`
  max-width: 660px;
  margin-bottom: 30px;
  display: flex;
  flex: 1;
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  margin: 0 5px 0 0;

  div {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50% 20% 50% 20%;
    background: #fff;

    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
  }
`;

export const Content = styled.div`
  border-radius: 0 5px 5px 5px;
  background: #fff;
  display: flex;
  flex: 1;
  height: 400px;
`;
