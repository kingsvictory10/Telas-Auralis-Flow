import { useState } from "react";
import LoginScreen         from "./screens/LoginScreen";
import CheckinScreen       from "./screens/CheckinScreen";
import WeeklyCheckinScreen from "./screens/WeeklyCheckinScreen";
import ThankYouScreen      from "./screens/ThankYouScreen";
import ManagerLoginScreen  from "./screens/ManagerLoginScreen";
import DashboardScreen     from "./screens/DashboardScreen";

const SCREENS = {
  LOGIN:          "LOGIN",
  CHECKIN:        "CHECKIN",
  WEEKLY_CHECKIN: "WEEKLY_CHECKIN",
  THANK_YOU:      "THANK_YOU",
  MANAGER_LOGIN:  "MANAGER_LOGIN",
  DASHBOARD:      "DASHBOARD",
};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.LOGIN);

  const goToCheckin        = () => setScreen(SCREENS.CHECKIN);
  const goToWeeklyCheckin  = () => setScreen(SCREENS.WEEKLY_CHECKIN);
  const goToThankYou       = () => setScreen(SCREENS.THANK_YOU);
  const goToLogin          = () => setScreen(SCREENS.LOGIN);
  const goToManagerLogin   = () => setScreen(SCREENS.MANAGER_LOGIN);
  const goToDashboard      = () => setScreen(SCREENS.DASHBOARD);

  return (
    <>
      {screen === SCREENS.LOGIN          && (
        <LoginScreen
          onLogin={goToCheckin}
          onManagerAccess={goToManagerLogin}
        />
      )}
      {screen === SCREENS.CHECKIN        && <CheckinScreen       onComplete={goToWeeklyCheckin} />}
      {screen === SCREENS.WEEKLY_CHECKIN && <WeeklyCheckinScreen onComplete={goToThankYou}      />}
      {screen === SCREENS.THANK_YOU      && <ThankYouScreen      onRestart={goToLogin}          />}
      {screen === SCREENS.MANAGER_LOGIN  && (
        <ManagerLoginScreen
          onLogin={goToDashboard}
          onBack={goToLogin}
        />
      )}
      {screen === SCREENS.DASHBOARD      && <DashboardScreen onLogout={goToLogin} />}
    </>
  );
}
