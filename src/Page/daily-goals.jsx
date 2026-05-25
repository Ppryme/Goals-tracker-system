import { useContext,useEffect } from "react";
import { HeroContext } from "../context/dashboardContext.jsx";
import { requestNotificationPermission } from "../utils/notification.js";
import Overview from "../sections/overview.jsx";
import DecisionLense from "../sections/decisionLense.jsx";
import WeeklyQuestions from "../sections/weeklyQuestions.jsx"; 
import TabData from "../components/tabData.jsx";
import DailyCheckin from "../sections/dailyCheckin.jsx";
import scheduleDailyNotifications from "../utils/scheduledNotificatio.js";
import { subscribeToPush } from "../utils/pushSubscriptions.js";



export default function HeroLearningDashboard() {
  const {
    tab,
    setTab,
  } = useContext(HeroContext);

  useEffect(() => {
  requestNotificationPermission()
  subscribeToPush()
}, [])

  useEffect(() => {
  scheduleDailyNotifications();
}, []);



  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-6 sm:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <p className="text-zinc-400 text-sm mb-2">Your personal learning system</p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">The Four Forces</h1>
        <p className="text-zinc-300 mt-3 max-w-2xl text-lg">
          A daily growth dashboard built around Ronaldo, Elon Musk, Joe Rogan, and David Goggins.
        </p>

        <div className="grid grid-cols-2 sm:flex gap-3 mt-8">
          <TabData tab={tab} setTab={setTab} />
        </div>

        {tab === "overview" && (
              <Overview/>
        )}

        {tab === "daily" && (
          <DailyCheckin />
        )}

        {tab === "weekly" && (
          <WeeklyQuestions />
        )}

        {tab === "decision" && (
          <DecisionLense />
          
        )}
      </div>
    </div>
  );
}
