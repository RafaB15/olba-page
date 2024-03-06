import MenuBar from './components/MenuBar'
import FrontPageHeader from './components/FrontPageHeader'

import './App.css'

function App() {
  return (
    <div className='App'>
      <MenuBar logo_path={"olba_logo.png"} />
      <FrontPageHeader />
    </div>
  )
}

export default App
