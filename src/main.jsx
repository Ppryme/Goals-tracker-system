
import { createRoot } from 'react-dom/client'
import { HeroContextProvider } from './context/dashboardContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
    <HeroContextProvider>
      <App />
    </HeroContextProvider>
  
)
