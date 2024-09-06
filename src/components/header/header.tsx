import styled from "styled-components";
import { BurgerIcon } from "../../icons/burgerIcon";
import { CartIcon } from "../../icons/cartIcon";

interface IProps {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = (props: IProps) => {
  
  const handleMenu = () => {
    props.setShowSideBar(!props.showSideBar);
  };

  return (
    <HeaderContainer>
      <BurgerButton onClick={handleMenu}>
        <BurgerIcon />
      </BurgerButton>
      <Title>Главная</Title>
      <CartButton>
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
  font-size: 32px;
  color: black;
  margin-left: 16px;
  transform: translateY(-4px);
`;

const BurgerButton = styled.div``;

const CartButton = styled.div`
  display: block;
  margin-left: auto;
  margin-right: 0;
`;
