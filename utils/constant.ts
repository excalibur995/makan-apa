import { BsSun, BsSunset, BsMoon, BsSunrise } from "react-icons/bs";

export const AVAILABLE_ROUTES = ["/", "/foods", "/profile"] as const;
export const ROUTES_NAME = {
  "/": "Home",
  "/foods": "Foods",
  "/profile": "Profile",
};

export const TIME_ICON = {
  morning: BsSunrise,
  afternoon: BsSun,
  evening: BsSunset,
  night: BsMoon,
} as const;

export const TIME_TEXT = {
  morning: "Good Morning",
  afternoon: "Good Afternoon",
  evening: "Good Evening",
  night: "Good Night",
} as const;
