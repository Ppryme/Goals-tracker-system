import './App.css'
import HeroLearningDashboard from './Page/daily-goals.jsx'
import { HeroContextProvider } from './context/dashboardContext.jsx'

export default function App() {


  return (
    <HeroContextProvider>
      <section id="center">
        <HeroLearningDashboard />
      </section>
    </HeroContextProvider>
  )
}


