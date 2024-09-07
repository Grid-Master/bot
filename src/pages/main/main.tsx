import styled from "styled-components";
import categoriesJson from "../../categories.json";
import { useState } from "react";
import { CategoryCard, ICategoryCard } from "./categoryCard";

export const Main = () => {
  const [categories, setCategories] = useState<ICategoryCard[]>(categoriesJson);

  return (
    <Container>
      {categoriesJson.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
