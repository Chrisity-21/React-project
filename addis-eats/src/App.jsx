import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {Header} from './Header'
import {Menu} from './menu'
import { Dish } from "./Dish"
import './App.css'

const name = "tibs";
const price = 200;
function App(){
  const [count, setCount] = useState(0)
  return (
  <>
  <Header/>
    {/* <Dish name={name} price={price}/> */}
    <Menu/>
  </>
  )
}
export default App