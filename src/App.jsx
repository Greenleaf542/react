import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="container">
     
       <header class="flex">
                <div class="logo">
                 
                    
                </div>
                <div class="menu">
                    <ul>
                       <li><a href="#">Microsoft 365</a></li>
                       <li><a href="#">Teams</a></li>
                       <li><a href="#">Copilot</a></li>
                       <li><a href="#">Windows</a></li>
                       <li><a href="#">Surface</a></li>
                       <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div class="left_side flex">
                    <ul>
                        <li><a href="#">All Microsoft <i class="fa-solid fa-angle-down"></i></a></li>
                    </ul>
                   <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                 <i class="fa-solid fa-user-plus"></i>
                    </div>
        </header>    
        
     </div>
  
            <section class="banner">
            <div class="banner_content container">
                <h1>Meet Surface Pro</h1>
                <p>
                                            This laptop's unrivalled flexibility and AI features like Live Captions and Cocreator, enable you to do more than you ever imagined.
                </p>
                <button class="btn">Learn More</button>
            </div>
        </section>
         
         <section class="group container">
            <div>
                <i class="fa-brands fa-windows"></i>
                <h6><a href="#">choose your Microsoft 365</a></h6>
            </div>
            <div>
                <i class="fa-solid fa-tablet-screen-button"></i>
                <h6><a href="#">shop Xbox</a></h6>
            </div>
            <div>
                <i class="fa-brands fa-windows"></i>
                <h6><a href="#">get Windows 11</a></h6>
            </div>
            <div>
                <i class="fa-solid fa-tablet-screen-button"></i>
                <h6><a href="#">explore Surface devices</a></h6>
            </div>
         </section>
       
         <div class="flex container">
            <div class="box">
                <h3>Achieve the extraordinary</h3>
                <p>Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.</p>
                <button class="btn space">Shop Microsoft 365</button>
            </div>
             <div class="box">
                <h3>Copilot is your AI companion</h3>
                <p>Always by your side, ready to support you whenever and wherever you need it.</p>
                <button class="btn space">Download the copilot app</button>
            </div>
             <div class="box">
                <h3>Xbox Series S</h3>
                <p>Next-gen performance in the smallest Xbox ever.</p>
                <button class="btn space">Shop Xbox Series S</button>
            </div>
             <div class="box">
                <h3>Xbox Series X</h3>
                <p>The fastest, most powerful Xbox ever.</p>
                <button class="btn space">Shop Xbox Series X</button>
            </div>
         </div>
        
    </>
  )
}

export default App
