import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../common/hooks/reduxHooks";
import { selectAuth } from "../../store/auth/authSelectors";
import { clearUserPhone } from "../../store/auth/authSlice";
import { useTelegram } from "../../common/hooks/useTelegram";

export const Profile = () => {
  const { authInfo } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch()
  const {user} = useTelegram()

  const handleLogOut = () => {
    dispatch(clearUserPhone())
  }

  return (
    <Container>
      <ProfileInfo>
        {user?.username || "No name"}
      </ProfileInfo>
      <ProfileInfo>{authInfo.phone}</ProfileInfo>
      <CloseAppButtom onClick={handleLogOut}>Выйти</CloseAppButtom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
`;

const ProfileInfo = styled.div`
  background-color: #ecf8f8;
  padding: 12px;
  border-radius: 6px;
  text-align: center;
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

