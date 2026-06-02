import './tailwind.css'
import HeroLearningDashboard from './Page/daily-goals.jsx'
import { HeroContextProvider } from './context/dashboardContext.jsx'

export default function App() {


  return (
    <HeroContextProvider>
     
        <HeroLearningDashboard />
    
    </HeroContextProvider>
  )
}


