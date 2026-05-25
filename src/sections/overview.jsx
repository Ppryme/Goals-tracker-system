import { heroCards,} from "../data/dashboard-data.js"
import { motion } from "framer-motion";

export default function Overview () {
    return (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid sm:grid-cols-2 gap-5 mt-8">
            {heroCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.hero} className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className={`h-14 w-14 rounded-full ${card.bg} ${card.text} flex items-center justify-center font-bold`}>
                      {card.initials}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{card.hero}</h2>
                      <span className={`inline-flex mt-2 rounded-full px-3 py-1 text-sm font-semibold ${card.bg} ${card.text}`}>{card.tag}</span>
                    </div>
                  </div>
                  <Icon className={`mt-8 ${card.text}`} size={30} />
                  <h3 className={`text-3xl font-bold mt-3 ${card.text}`}>{card.title}</h3>
                  <p className="text-zinc-300 mt-2 text-lg">{card.subtitle}</p>
                </div>
              );
            })}
          </motion.div>
    )
}