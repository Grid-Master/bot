import styled from "styled-components";
import { CrossIcon } from "../../common/components/icons/crossIcon";
import { ICategoryCard } from "../category/categoryCard";
import { useAppDispatch } from "../../common/hooks/reduxHooks";
import {
  addInCart,
  minusFromCart,
  removeFromCart,
} from "../../store/cart/cartSlice";

export const CartItem = (props: ICategoryCard) => {
  const dispatch = useAppDispatch();

  const handleCount = (action: "add" | "minus") => {
    switch (action) {
      case "add": {
        dispatch(addInCart(props));
        break;
      }
      case "minus": {
        dispatch(minusFromCart(props.id));
      }
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container>
      <InfoWrapper>
        <Title>{props.name}</Title>
        <Price>Цена: {props.price * props.count}р.</Price>
      </InfoWrapper>
      <InfoWrapper>
        <CrossIconContainer onClick={() => handleRemove(props.id)}>
          <CrossIcon />
        </CrossIconContainer>
        <CountContainer>
          <StyledButton onClick={() => handleCount("minus")}>-</StyledButton>
          <Count>{props.count} шт.</Count>
          <StyledButton onClick={() => handleCount("add")}>+</StyledButton>
        </CountContainer>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ecf8f8;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 24px;
`;

const Price = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: white;
  border-radius: 3px;
`;

const CrossIconContainer = styled.div`
  font-size: 16px;
  width: fit-content;
  margin-left: auto;
`;

const Count = styled.div`
  font-size: 16px;
`;
