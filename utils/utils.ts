import dayjs from "dayjs";

export function getGreetings() {
  const currentHour = dayjs().hour();
  switch (true) {
    case currentHour < 6:
      return "midnight";
    case currentHour < 12:
      return "morning";
    case currentHour < 18:
      return "afternoon";
    case currentHour < 22:
      return "evening";
    default:
      return "midnight";
  }
}
