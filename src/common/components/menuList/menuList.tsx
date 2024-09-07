import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

//@ts-ignore
const tg = window.Telegram.WebApp;

interface IProps {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuList = (props:IProps ) => {
const navigate = useNavigate()
const { pathname } = useLocation();

  const handleCloseApp = () => {
    tg.close();
  };

  const handleNavigate = (path: string) => {
    navigate(path)
    props.setShowSideBar(false)
  }

  return (
    <Container>
      <ItemsWrapper>
        <Item isActive={pathname.includes("/main")} onClick={() => handleNavigate("/main")}>Главная</Item>
        <Item isActive={pathname.includes("/profile")} onClick={() => handleNavigate("/profile")}>Профиль</Item>
        <Item isActive={pathname.includes("/history")} onClick={() => handleNavigate("/history")}>История заказов</Item>
        <Item isActive={pathname.includes("/bonuses")} onClick={() => handleNavigate("/bonuses")}>О бонусах</Item>
      </ItemsWrapper>
      <CloseAppButtom onClick={handleCloseApp}>Выйти</CloseAppButtom>
    </Container>
  );
};

const Container = styled.div`
  /* padding: 5px 10px; */
  display: flex;
  flex-direction: column;
`;

const ItemsWrapper = styled.div``;

const Item = styled.div<{isActive: boolean}>`
  padding: 5px 10px;
  font-size: 24px;
  background-color: ${({isActive})=> isActive ? "#ecf8f8" : "none" };
`;
const CloseAppButtom = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  background-color: #ff6969;
  text-align: center;
  font-size: 16px;
  padding: 8px 8px;
  border-radius: 8px;
  color: white;
  width: fit-content;
`;
