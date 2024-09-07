import styled from "styled-components";
import { LogoIcon } from "../icons/logoIcon";
import { MenuList } from "../menuList/menuList";

interface IProps {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = (props: IProps) => {
  //@ts-ignore
const tg = window.Telegram.WebApp;
  return (
    <>
      <BackgroundSidebar showSideBar={props.showSideBar} onClick={() => props.setShowSideBar(false)}>
        <SideBarContainer showSideBar={props.showSideBar} onClick={(e) => e.stopPropagation()}>
          <TitleWrapper>
            <LogoIcon />
            <div>
            <Title>{tg.initDataUnsafe?.user?.username || "No name"}</Title>
            <Bonuses>Бонусов: 34</Bonuses>
            </div>
          </TitleWrapper>
          <MenuList setShowSideBar={props.setShowSideBar} />
        </SideBarContainer>
      </BackgroundSidebar>
    </>
  );
};

const SideBarContainer = styled.div<{ showSideBar: boolean }>`
  position: absolute;
  top: 0;
  left: ${({ showSideBar }) => (showSideBar ? "0" : "-70vw")};
  height: 100vh;
  width: 70vw;
  background-color: #ffffff;
  z-index: 100;
  transition: 0.3s;
`;

const BackgroundSidebar = styled.div<{ showSideBar: boolean }>`
  visibility: ${({ showSideBar }) => (showSideBar ? "visible" : "hidden")};
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

const TitleWrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  font-size: 64px;
  margin-bottom: 24px;
`;

const Title = styled.div`
  margin-left: 6px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: black;
  max-width: 173px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Bonuses = styled.div`  
text-align: center;
font-size: 16px;
`;
