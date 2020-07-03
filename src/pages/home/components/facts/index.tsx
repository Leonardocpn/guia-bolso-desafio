import React, { useEffect, useState } from "react";
import { useCategory } from "../../../../service/categoryContext";
import api from "../../../../service/api";
import { Button } from "@material-ui/core";
import { Container, StyledCard, FactContainer } from "./styles";

interface ApiCategoryResponse {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

function FactCard() {
  const { category } = useCategory()!;
  const [joke, setJoke] = useState<string>();

  useEffect(() => {
    api
      .get<ApiCategoryResponse>(`/random?category=${category}`)
      .then((response) => {
        const jokeFromApi = response.data;
        setJoke(jokeFromApi.value);
      });
  }, [category]);

  async function handleNewJoke() {
    await api
      .get<ApiCategoryResponse>(`/random?category=${category}`)
      .then((response) => {
        const newJoke = response.data;
        setJoke(newJoke.value);
      });
  }

  return (
    <Container>
      <StyledCard>
        <FactContainer>{joke}</FactContainer>
      </StyledCard>
      <Button variant="outlined" color="primary" onClick={handleNewJoke}>
        Get a new Fact
      </Button>
    </Container>
  );
}

export default FactCard;
