import styled from "styled-components";
import { CryingFaceIcon } from "../icons/cryingFaceIcon";

export const EmptyPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>Ничего нет</Title>
        <CryingFaceIcon />
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 59px);
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  margin: auto;
  width: fit-content;
  height: 100%;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
