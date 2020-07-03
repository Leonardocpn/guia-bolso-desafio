import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { useCategory } from "../../service/categoryContext";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import image from "../../assets/chuck-norris.jpg";
import {
  Wrapper,
  Header,
  StyledImage,
  Main,
  Title,
  Subtitle,
  StyleSelect,
} from "./styles";

function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { setCategory } = useCategory()!;

  useEffect(() => {
    api.get<string[]>("/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  function handleSelected(
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ) {
    setSelectedCategory(event.target.value as string);
    setCategory(event.target.value as string);
  }

  return (
    <Wrapper>
      <Header>
        <StyledImage src={image} alt="Chuck Norris Image"></StyledImage>
        <Title>Wanna hear some Chuck Noris fatcs?</Title>
        <Subtitle>Select a category from bellow</Subtitle>
        <StyleSelect>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              aria-label="categories"
              labelId="categories"
              value={selectedCategory}
              onChange={handleSelected}
              label="category"
              style={{ backgroundColor: "white" }}
              variant="outlined"
            >
              {categories &&
                categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    <Typography>{category}</Typography>
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </StyleSelect>
      </Header>
      <Main></Main>
    </Wrapper>
  );
}

export default Home;
