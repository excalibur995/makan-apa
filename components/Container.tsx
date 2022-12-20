import React from "react";
import Link from "next/link";
import { styled } from "stitches.config";
import {
  AVAILABLE_ROUTES,
  ROUTES_NAME,
  TIME_ICON,
  TIME_TEXT,
} from "utils/constant";
import useGreetings from "shared/hooks/useGreeting";

const HeaderWrapper = styled("header", {
  position: "fixed",
  inset: 0,
  bottom: "unset",
  maximize: "initial",
  borderBottom: "thin solid #efefefef",
});

const ContainerWrapper = styled("section", {
  flexing: "row",
  justifyContent: "space-between",
  padding: "$16 $4",
});

const NavigationHeader = styled("section", {
  display: "none",
  "@bp1": {
    display: "inherit",
  },
});

const NavigationContainer = styled("nav", {
  display: "inherit",
  gap: "$4",
  variants: {
    isFooter: {
      true: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        placeItems: "center",
        width: "100%",
      },
    },
  },
});

const ContentWrapper = styled("main", {
  padding: "55px 0",
  minHeight: "100vh",
});

const Footer = styled("footer", {
  position: "fixed",
  inset: 0,
  top: "unset",
  maximize: "initial",
  borderTop: "thin solid #efefefef",
  "@bp1": {
    display: "none",
  },
  a: {
    fontWeight: 700,
    padding: "$10",
  },
});

const Greetings = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
});

function RenderNavigation() {
  return (
    <>
      {AVAILABLE_ROUTES.map((route) => (
        <Link key={route} href={route}>
          {ROUTES_NAME[route]}
        </Link>
      ))}
    </>
  );
}

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const { data = "night" } = useGreetings();
  return (
    <>
      <HeaderWrapper>
        <ContainerWrapper>
          <Greetings>
            {React.createElement(TIME_ICON[data])}
            {TIME_TEXT[data]}
          </Greetings>
          <NavigationHeader>
            <NavigationContainer>
              <RenderNavigation />
            </NavigationContainer>
          </NavigationHeader>
        </ContainerWrapper>
      </HeaderWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer>
        <ContainerWrapper>
          <NavigationContainer isFooter>
            <RenderNavigation />
          </NavigationContainer>
        </ContainerWrapper>
      </Footer>
    </>
  );
};

export default Header;
