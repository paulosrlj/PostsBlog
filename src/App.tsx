import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Input placeholder='John Doe' text='' type='text' />
  )
}

export default App
