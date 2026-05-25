export default function DayTab({days,selectedDay,setSelectedDay}) {
   return <>
        {days.map((day) => (
        <button
        key={day}
        onClick={() => setSelectedDay(day)}
        className={`rounded-full px-4 py-2 text-sm font-semibold border transition ${
            selectedDay === day ? "bg-white text-zinc-950 border-white" : "bg-zinc-950 border-zinc-700 text-zinc-300"
        }`}
        >
        {day}
        </button>
    ))}
    </>
}