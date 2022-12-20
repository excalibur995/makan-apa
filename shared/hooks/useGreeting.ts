import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

export default function useGreetings() {
  return useQuery(["useGreetings"], () => {
    const currentHour = dayjs().hour();
    switch (true) {
      case currentHour < 6:
        return "night";
      case currentHour < 12:
        return "morning";
      case currentHour < 18:
        return "afternoon";
      case currentHour < 22:
        return "evening";
      default:
        return "night";
    }
  });
}
