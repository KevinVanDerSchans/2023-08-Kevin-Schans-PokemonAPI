import { Outlet } from "react-router-dom"
import styled from "styled-components"

const Main = styled.main`
  margin: 0 auto;
  overflow: hidden;
`;

const MainLayout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default MainLayout;
