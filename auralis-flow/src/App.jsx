import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import CheckinScreen from "./screens/CheckinScreen";
import WeeklyCheckinScreen from "./screens/WeeklyCheckinScreen";
import ThankYouScreen from "./screens/ThankYouScreen";

const SCREENS = {
  LOGIN:          "LOGIN",
  CHECKIN:        "CHECKIN",
  WEEKLY_CHECKIN: "WEEKLY_CHECKIN",
  THANK_YOU:      "THANK_YOU",
};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.LOGIN);

  const goToCheckin       = () => setScreen(SCREENS.CHECKIN);
  const goToWeeklyCheckin = () => setScreen(SCREENS.WEEKLY_CHECKIN);
  const goToThankYou      = () => setScreen(SCREENS.THANK_YOU);
  const goToLogin         = () => setScreen(SCREENS.LOGIN);

  return (
    <>
      {screen === SCREENS.LOGIN          && <LoginScreen       onLogin={goToCheckin}             />}
      {screen === SCREENS.CHECKIN        && <CheckinScreen     onComplete={goToWeeklyCheckin}    />}
      {screen === SCREENS.WEEKLY_CHECKIN && <WeeklyCheckinScreen onComplete={goToThankYou}       />}
      {screen === SCREENS.THANK_YOU      && <ThankYouScreen    onRestart={goToLogin}             />}
    </>
  );
}
