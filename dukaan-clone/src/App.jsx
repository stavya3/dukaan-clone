
import './App.css'
import { BlueCard } from './Components/BlueCard'
import { Overview } from './Components/Overview'
import { RevenueCard } from './Components/RevenueCard'
import { Topbar } from './Components/Topbar'
import { Transactions } from './Components/Transactions'

function App() {


  return (
    <div>
      <Topbar />
      <Overview />
      <Transactions />
    </div>
    
  )
}

export default App
