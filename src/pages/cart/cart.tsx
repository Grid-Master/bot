import { useAppSelector } from "../../common/hooks/reduxHooks";
import { selectCartItems } from "../../store/cart/cartSelector";
import { EmptyCart } from "./emptyCart";

export const Cart = () => {
  const items = useAppSelector(selectCartItems);

  return items.length ? <></> : <EmptyCart />;
};
