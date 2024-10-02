
import './App.css'
import { BlueCard } from './Components/BlueCard'
import { Foooter } from './Components/Foooter'
import { Overview } from './Components/Overview'
import { RevenueCard } from './Components/RevenueCard'
import { Table } from './Components/Table'
import { Tabletop } from './Components/Tabletop'
import { Topbar } from './Components/Topbar'
import { Transactions } from './Components/Transactions'

function App() {


  return (
    <div>
      <Topbar />
      <Overview />
      <Transactions />
      <Table />
      <Foooter />
    </div>
    
  )
}

export default App
