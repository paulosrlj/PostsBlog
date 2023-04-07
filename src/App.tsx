import { useState } from 'react'

import SignUp from './pages/SignUp/SignUp'
import MainScreen from './pages/MainScreen/MainScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainScreen />
  )
}

export default App
