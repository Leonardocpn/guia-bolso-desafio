import styled from "styled-components";
import { Card } from "@material-ui/core";

export const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    width: 95%;
    margin: auto;
  }
`;

export const FactContainer = styled.div`
  margin: 2%;
  font-size: 18px;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 6px;
  padding: 12px;
`;
