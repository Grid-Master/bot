import styled from "styled-components";

interface IProps {
    showSideBar: boolean;
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const SideBar = (props: IProps) => {
  return (
    <>
      <BackgroundSidebar showSideBar={props.showSideBar} onClick={() => props.setShowSideBar(false)}>
        <SideBarContainer showSideBar={props.showSideBar} onClick={(e) => e.stopPropagation()}>
            <Title>BOGOROSH</Title>
        </SideBarContainer>
      </BackgroundSidebar>
    </>
  );
};

const SideBarContainer = styled.div<{showSideBar: boolean}>`
position: absolute;
top: 0;
left: ${({showSideBar}) => showSideBar ?"0" : "-70vw" };
  height: 100vh;
  width: 70vw;
  background-color: #ffffff;
  z-index: 100;

  transition: 0.3s;
`;

const BackgroundSidebar = styled.div<{showSideBar: boolean}>`
visibility: ${({showSideBar}) => showSideBar ?"visible" : "hidden"};
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: black;
  margin-left: 16px;
`;
