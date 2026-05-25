import { createContext, useEffect, useMemo, useState } from "react";
import { goalsByDay, habitChecks } from "../data/dashboard-data";

export const HeroContext = createContext({
  selectedDay: "Monday",
  tab: "overview",
  setTab: () => {},
  setSelectedDay: () => {},
  checked: {},
  habitChecked: {},
  progress: 0,
  done: 0,
  days: Object.keys(goalsByDay),
  dayKey : null,
  habitDone: 0,
  total: 0,
  groupedGoals: {},
  toggleGoal: () => {},
  toggleHabit: () => {},
  resetDay: () => {},
});

const days = Object.keys(goalsByDay);

function getSavedData(key) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export function HeroContextProvider({ children }) {
  const todayName = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const [selectedDay, setSelectedDay] = useState(
    days.includes(todayName) ? todayName : "Monday"
  );

   const [tab, setTab] = useState("overview");

  const [checked, setChecked] = useState(() =>
    getSavedData("heroDashboardChecks")
  );

  const [habitChecked, setHabitChecked] = useState(() =>
    getSavedData("heroDashboardHabits")
  );

  useEffect(() => {
    localStorage.setItem(
      "heroDashboardChecks",
      JSON.stringify(checked)
    );
  }, [checked]);

  useEffect(() => {
    localStorage.setItem(
      "heroDashboardHabits",
      JSON.stringify(habitChecked)
    );
  }, [habitChecked]);

  const todaysGoals = goalsByDay[selectedDay];

  const dayKey = selectedDay;

  const done = todaysGoals.filter(
    (_, index) => checked[`${dayKey}-${index}`]
  ).length;

  const habitDone = habitChecks.filter(
    (_, index) => habitChecked[`${dayKey}-habit-${index}`]
  ).length;

  const total = todaysGoals.length + habitChecks.length;

  const progress = Math.round(
    ((done + habitDone) / total) * 100
  );

  const groupedGoals = useMemo(() => {
    return todaysGoals.reduce((acc, goal, index) => {
      acc[goal.group] = acc[goal.group] || [];

      acc[goal.group].push({
        ...goal,
        index,
      });

      return acc;
    }, {});
  }, [todaysGoals]);

  function toggleGoal(index) {
    setChecked((prev) => ({
      ...prev,
      [`${dayKey}-${index}`]:
        !prev[`${dayKey}-${index}`],
    }));
  }

  function toggleHabit(index) {
    setHabitChecked((prev) => ({
      ...prev,
      [`${dayKey}-habit-${index}`]:
        !prev[`${dayKey}-habit-${index}`],
    }));
  }

  function resetDay() {
    setChecked((prev) => {
      const copy = { ...prev };

      todaysGoals.forEach((_, index) => {
        delete copy[`${dayKey}-${index}`];
      });

      return copy;
    });

    setHabitChecked((prev) => {
      const copy = { ...prev };

      habitChecks.forEach((_, index) => {
        delete copy[`${dayKey}-habit-${index}`];
      });

      return copy;
    });
  }

  const contextValue = {
    selectedDay,
    setSelectedDay,
    days,
    tab,
    setTab,
    checked,
    habitChecked,
    progress,
    done,
    dayKey: selectedDay,
    habitDone,
    total,
    groupedGoals,
    toggleGoal,
    toggleHabit,
    resetDay,
  };

  return (
    <HeroContext.Provider value={contextValue}>
      {children}
    </HeroContext.Provider>
  );
}