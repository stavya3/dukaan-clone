
import './App.css'
import { BlueCard } from './Components/BlueCard'
import { Overview } from './Components/Overview'
import { RevenueCard } from './Components/RevenueCard'
import { Tabletop } from './Components/Tabletop'
import { Topbar } from './Components/Topbar'
import { Transactions } from './Components/Transactions'

function App() {


  return (
    <div>
      <Topbar />
      <Overview />
      <Transactions />
      <Tabletop />
    </div>
    
  )
}

export default App
