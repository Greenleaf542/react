import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="logo">Shrawan</div>
        </div>
        <div className="right">
          <ul>
            <li><a href="#">Home</a></li> 
            <li><a href="#">About Us</a></li> 
            <li><a href="#">Service</a></li> 
            <li><a href="#">Contact us</a></li> 
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
