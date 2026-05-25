import { tabData } from "../data/dashboard-data"

export default function TabData({ tab, setTab }) {
    return (
         <>
            {tabData.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`rounded-2xl px-5 py-3 border transition text-left ${
                tab === key
                  ? "bg-white text-zinc-950 border-white"
                  : "bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
              }`}
            >
              {label}
            </button>
          ))}
        </>
    )
}