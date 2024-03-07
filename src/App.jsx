import MenuBar from './components/MenuBar'
import FrontPageHeader from './components/FrontPageHeader'
import Presentation from './components/Presentation'

import './App.css'

function App() {
  return (
    <div className='App'>
      <MenuBar logo_path={"/src/images/olba_logo.png"} />
      <FrontPageHeader />
      <Presentation />
    </div>
  )
}

export default App
