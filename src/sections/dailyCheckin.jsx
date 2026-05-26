import { useContext } from "react";
import { HeroContext } from "../context/dashboardContext.jsx";
import { showNotification } from "../utils/notification.js";
import { habitChecks} from "../data/dashboard-data.js"
import {motion} from "framer-motion"
import DayTab from "../components/dayTab.jsx";
import {
  CheckCircle2,
  Circle,
  RotateCcw,
  CalendarDays,
  ShieldCheck,
} from "lucide-react"


export default function DailyCheckin() {



      const {
        selectedDay,
        setSelectedDay,
        days,
        dayKey,
        checked,
        habitChecked,
        progress,
        done,
        habitDone,
        total,
        groupedGoals,
        toggleGoal,
        toggleHabit,
        resetDay,
      } = useContext(HeroContext);

      return (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
                        <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-5 mb-5">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h2 className="text-2xl font-bold flex items-center gap-2"><CalendarDays /> {selectedDay} check-in</h2>
                              <p className="text-zinc-400 mt-1">Choose the day, tick your goals, and reset when needed.</p>
                              

                            </div>
                            <button onClick={resetDay} className="rounded-xl bg-zinc-800 hover:bg-zinc-700 p-3"><RotateCcw size={20} /></button>
                          </div>
            
                          <div className="grid grid-cols-2 sm:flex flex-wrap gap-2 mt-5">
                            <DayTab days={days} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                          </div>
            
                          <div className="mt-5 h-3 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-white rounded-full transition-all" style={{ width: `${progress}%` }} />
                          </div>
                          <p className="text-zinc-300 mt-2">{done + habitDone} / {total} done — {progress}%</p>
                        </div>

                              
                        <div className="space-y-5">
                          {Object.entries(groupedGoals).map(([group, goals]) => (
                            <div key={group} className="rounded-3xl bg-zinc-900 border border-zinc-800 p-5">
                              <h3 className="text-lg font-bold mb-3">{group}</h3>
                              <div className="space-y-3">
                                {goals.map((goal) => {
                                  const isDone = checked[`${dayKey}-${goal.index}`];
                                  return (
                                    <button key={goal.index} onClick={() => toggleGoal(goal.index)} className="w-full flex gap-4 text-left p-3 rounded-2xl hover:bg-zinc-800 transition">
                                      {isDone ? <CheckCircle2 className="text-green-400 shrink-0" /> : <Circle className="text-zinc-500 shrink-0" />}
                                      <div>
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                          <span className="text-xs rounded-full bg-zinc-800 text-zinc-300 px-2 py-1">{goal.time}</span>
                                          <span className="text-xs rounded-full bg-white text-zinc-950 px-2 py-1">{goal.hero}</span>
                                        </div>
                                        
                                        <p className={`font-semibold ${isDone ? "line-through text-zinc-500" : "text-zinc-100"}`}>{goal.item}</p>
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
            
                          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-5">
                            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><ShieldCheck size={20} /> Habits to stop</h3>
                            <div className="space-y-3">
                              {habitChecks.map((habit, index) => {
                                const isDone = habitChecked[`${dayKey}-habit-${index}`];
                                return (
                                  <button key={habit} onClick={() => toggleHabit(index)} className="w-full flex gap-4 text-left p-3 rounded-2xl hover:bg-zinc-800 transition">
                                    {isDone ? <CheckCircle2 className="text-green-400 shrink-0" /> : <Circle className="text-zinc-500 shrink-0" />}
                                    <p className={`font-semibold ${isDone ? "line-through text-zinc-500" : "text-zinc-100"}`}>{habit}</p>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
      )
}