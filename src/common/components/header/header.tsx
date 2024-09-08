import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { selectTotalPrice } from "../../../store/cart/cartSelector";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useTitle } from "../../hooks/useTitle";
import { BurgerIcon } from "../icons/burgerIcon";
import { CartIcon } from "../icons/cartIcon";

interface IProps {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = (props: IProps) => {
  const navigate = useNavigate();
  const { title } = useTitle();

  const cartPrice = useAppSelector(selectTotalPrice);

  const handleMenu = () => {
    props.setShowSideBar(!props.showSideBar);
  };

  return (
    <HeaderContainer>
      <BurgerButton onClick={handleMenu}>
        <BurgerIcon />
      </BurgerButton>
      <Title>{title}</Title>
      <CartButton onClick={() => navigate("/cart")}>
        {cartPrice ? <CartPrice>{cartPrice} р.</CartPrice> : null}
        <CartIcon />
      </CartButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  background-color: #ecf8f8;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: black;
  margin-left: 16px;
  transform: translateY(-4px);
`;

const BurgerButton = styled.div``;

const CartButton = styled.div`
  display: block;
  margin-left: auto;
  margin-right: 0;
  position: relative;
`;

const CartPrice = styled.div`
  padding: 2px;
  position: absolute;
  font-size: 12px;
  top: 5px;
  left: -34px;
  background-color: #ff6969;
  border-radius: 12px;
  color: white;
`;
