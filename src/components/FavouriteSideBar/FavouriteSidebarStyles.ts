import styled from "styled-components";

const SidebarOverlay = styled.div<{
  $isOpen: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
`;

const FavouriteSidebarWrapper = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #ffb6ba;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  overflow-y: hidden;
  overflow-x: hidden;
  color: #fff;

  @media (max-width: 350px) {
    width: 100%;
    max-width: 220px;
  }
`;

const SidebarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
`;

const SidebarHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  font-family: "Dancing Script", cursive;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de;
  color: #000;
`;

const FavouritesContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  padding: 0 1rem;
  overflow-y: auto;
`;

const RemoveAllActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  background-color: red;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }

  &:hover {
    background-color: #7f0000;
  }
`;

const RemoveAllText = styled.p`
  font-weight: 600;
`;

const NoFavouritesText = styled(RemoveAllText)`
  color: #000;
`;

export {
  FavouriteSidebarWrapper,
  SidebarOverlay,
  SidebarContainer,
  SidebarHeader,
  SidebarTitle,
  FavouritesContentContainer,
  RemoveAllActionContainer,
  RemoveAllText,
  NoFavouritesText,
};
