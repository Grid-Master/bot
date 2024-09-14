import styled from "styled-components";
import { BagIcon } from "../../common/components/icons/bagIcon";
import { WalletIcon } from "../../common/components/icons/walletIcon";
import { CheckMarkIcon } from "../../common/components/icons/checkMarkIcon";

export const Bonuses = () => {
  return (
    <Container>
      <Title>Как это работает?</Title>
      <Step>
        <IconContainer>
          <BagIcon />
        </IconContainer>
        <Text>Делайте заказ на сайте или в мобильном приложении</Text>
      </Step>
      <Step>
        <IconContainer>
          <WalletIcon />
        </IconContainer>
        <Text>Накапливайте баллы за каждую покупку</Text>
      </Step>
      <Step>
        <IconContainer>
          <CheckMarkIcon />
        </IconContainer>
        <Text>Оплачивайте покупку баллами</Text>
      </Step>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  & > div {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Title = styled.div`
  width: fit-content;
  font-weight: 500;
  font-size: 20px;
`;

const Step = styled.div`
  font-size: 58px;
  width: 270px;
  text-align: center;

  svg {
    path {
      stroke: white;
    }
  }
`;

const Text = styled.div`
  font-size: 14px;
`;

const IconContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 4px;
  width: 70px;
  height: 70px;
  background-color: #ff6969;
  border-radius: 50%;
`;
