import styled from "styled-components";

//@ts-ignore
const tg = window.Telegram.WebApp;

export const MenuList = () => {
  const handleCloseApp = () => {
    tg.close();
  };

  return (
    <Container>
      <ItemsWrapper>
        <Item>Главная</Item>
        <Item>Профиль</Item>
        <Item>История заказов</Item>
        <Item>О бонусах</Item>
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
