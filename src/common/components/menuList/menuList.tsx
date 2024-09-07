import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

//@ts-ignore
const tg = window.Telegram.WebApp;

interface IProps {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuList = (props:IProps ) => {
const navigate = useNavigate()

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
        <Item onClick={() => handleNavigate("/main")}>Главная</Item>
        <Item onClick={() => handleNavigate("/profile")}>Профиль</Item>
        <Item onClick={() => handleNavigate("/history")}>История заказов</Item>
        <Item onClick={() => handleNavigate("/bonuses")}>О бонусах</Item>
      </ItemsWrapper>
      <CloseAppButtom onClick={handleCloseApp}>Выйти</CloseAppButtom>
    </Container>
  );
};

const Container = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
`;

const ItemsWrapper = styled.div``;
const Item = styled.div`
  padding: 5px 0;
  font-size: 24px;
`;
const CloseAppButtom = styled.div`
  margin-top: auto;
  background-color: brown;
  text-align: center;
  font-size: 24px;
  padding: 10px 0;
  border-radius: 16px;
  color: white;
`;
