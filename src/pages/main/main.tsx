import styled from "styled-components";
import categoriesJson from "../../categories.json";
import { useState } from "react";
import { MainCard, IMainCard } from "./mainCard";

export const Main = () => {
  const [items, setItems] = useState<IMainCard[]>(categoriesJson);

  return (
    <Container>
      {items.map((category) => (
        <MainCard key={category.id} {...category} />
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
