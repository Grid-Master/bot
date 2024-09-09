import styled from "styled-components";
import { useAppSelector } from "../../common/hooks/reduxHooks";
import { selectCartItems } from "../../store/cart/cartSelector";
import { EmptyCart } from "./emptyCart";
import { CartItem } from "./cartItem";

export const Cart = () => {
  const items = useAppSelector(selectCartItems);

  console.log(items);

  return items.length ? (
    <Container>
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </Container>
  ) : (
    <EmptyCart />
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
`;
