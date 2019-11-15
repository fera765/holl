import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
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
  border-radius: 5px;
  flex-direction: column;
  background: #fff;
  display: flex;
  flex: 1;
  min-height: 200px;
`;

export const HeaderUser = styled.div`
  display: flex;
  flex: 1;
  margin-top: 18px;
  height: 50px;

  ul {
    display: flex;
    flex: 1;

    li {
      color: #403b3a;
      display: flex;
      list-style: none;
      align-items: center;
      height: 40px;
      letter-spacing: 1px;

      &:first-child {
        font-size: 19px;
        font-weight: bold;
        padding-left: 25px;
        flex: 7;
        justify-content: flex-start;
      }
      &:last-child {
        flex: 1;
        justify-content: flex-end;
        padding-right: 25px;

        img {
          cursor: pointer;
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;

export const Body = styled.div`
  margin-top: 30px;

  img {
    width: 100%;
  }
`;
