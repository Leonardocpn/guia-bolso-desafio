import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fcfcfc;
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  @media only screen and (max-width: 600px) {
    padding: 0;
    margin-bottom: 12px;
  }
`;

export const StyledImage = styled.img`
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (max-width: 500px) {
    border-radius: 0;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  margin: 18px;
  font-size: 25px;
  font-weight: bold;
`;

export const Subtitle = styled.div`
  margin: 12px;
  margin-top: 0;
  font-size: 16px;
`;
export const StyleSelect = styled.div`
  width: 500px;
  @media only screen and (max-width: 600px) {
    width: 95%;
    margin: auto;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
