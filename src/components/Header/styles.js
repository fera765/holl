import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background: linear-gradient(to bottom, #5c6a7d 0%, #34465d 100%), transparent;
  background-size: 100% 100%, 100%;
  background-repeat: no-repeat;
  background-position: top;
  padding: 0 7% 0 7%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  flex: 0;
  display: flex;
  align-items: center;

  img {
    margin-top: 2px;
    height: 34px;
  }
`;

export const Search = styled.div`
  flex: 3;
  max-width: 300px;
  min-width: 200px;
  margin-left: 20px;
  display: flex;
`;

export const FormInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 35px;
  width: 100%;
  background: #fff;
  padding: 6px 15px 6px 26px;

  input {
    letter-spacing: 2px;
    width: 100%;
    flex: 1;
    font-size: 14px;
    color: #121212;
    border: 0;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    width: 230px;
  }
`;

export const Painer = styled.div`
  flex: 8;
  margin-left: 20px;
  align-items: center;
  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
    li {
      letter-spacing: 2px;
      font-weight: normal;
      padding: 5px;
      margin-left: 17px;
      display: flex;
      list-style: none;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
