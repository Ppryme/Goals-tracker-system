import { decisionLens } from "../data/dashboard-data";
import {motion} from "framer-motion";

export default function DecisionLense() {  
    return <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
                <p className="text-zinc-300 text-lg mb-5">Facing a big decision? Run it through each hero’s lens.</p>
                <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 space-y-5">
                  <h2 className="text-2xl font-bold uppercase tracking-wide text-zinc-400">The Four-Lens Test</h2>
                  {decisionLens.map(([label, question]) => (
                    <div key={label} className="grid sm:grid-cols-[140px_1fr] gap-3 items-start">
                      <span className="rounded-full bg-white text-zinc-950 px-3 py-1 font-bold text-sm w-fit">{label}</span>
                      <p className="text-xl font-semibold">{question}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
}