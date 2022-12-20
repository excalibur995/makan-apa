import Container from "components/Container";
import { ReactNode } from "react";
import { styled } from "stitches.config";

type RootLayoutProps = { children: ReactNode };

const Wrapper = styled("div", {
  flexing: "column",
  justifyContent: "flex-start",
  height: "100vh",
  maximize: "initial",
  overflow: "hidden auto",
});

const Layout = ({ children }: RootLayoutProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Layout;
