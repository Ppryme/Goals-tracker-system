import {motion} from "framer-motion";
import { weeklyQuestions } from "../data/dashboard-data";

export default function WeeklyQuestions() {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-8 space-y-4">
            <p className="text-zinc-300 text-lg">Once a week, sit with these four questions.</p>
            {weeklyQuestions.map((item) => (
                <div key={item.hero} className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6">
                    <span className="rounded-full bg-white text-zinc-950 px-3 py-1 font-bold text-sm">{item.hero}</span>
                    <p className="text-2xl font-bold mt-4">“{item.q}”</p>
                    <textarea className="mt-4 w-full min-h-28 rounded-2xl bg-zinc-950 border border-zinc-700 p-4 outline-none focus:border-white" placeholder="Write your answer here..." />
                </div>
            ))}
        </motion.div>
    );
}