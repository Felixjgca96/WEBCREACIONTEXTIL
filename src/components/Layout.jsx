import { useEffect } from "react";
import styled from "styled-components";

import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;

const LayoutWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
