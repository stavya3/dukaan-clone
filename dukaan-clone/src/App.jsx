
import './App.css'
import { RevenueCard } from './Components/RevenueCard'

function App() {


  return (
    <div className='grid grid-cols-3 p-10 gap-5 '>
      <RevenueCard title={"Next Payout"} amount={"92,312.20"} orderCount={13} />
      <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
      <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"}/>
    </div>
  )
}

export default App
