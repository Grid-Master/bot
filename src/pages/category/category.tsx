import { Select } from "antd";
import { useState } from "react";
import styled from "styled-components";
import pizzasJson from "../../pizzas.json";
import { CategoryCard, ICategoryCard } from "./categoryCard";

export const Category = () => {
  const [categoryItems, setCategoryItems] = useState<Omit<ICategoryCard, "count">[]>(pizzasJson);

  const selectOptions = [
    { value: "all", label: "Все товары" },
    { value: "withoutMeat", label: "Без мяса" },
    { value: "new", label: "Новинки" },
  ];

  return categoryItems.length ? (
    <>
      <Filter>
        <FilterTitle>Фильтр</FilterTitle>
        <StyledSelect defaultValue={selectOptions[0].value} dropdownAlign={{ points: ["tr", "tl"] }} options={selectOptions} />
      </Filter>
      <Container>
        {categoryItems.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </Container>
    </>
  ) : null;
};

const Container = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;
const FilterTitle = styled.div``;

const StyledSelect = styled(Select)``;
