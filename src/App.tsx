import { useState } from "react"
import logo from './assets/logo.png'
import ExperimentalVersion from './ExperimentalVersion'
import CurrentVersion from './CurrentVersion'
import './App.css'


function App() {
  const [version, setVersion] = useState<string>('experimental')
  const [cardClass, setCardClass] = useState<string>('warlock')

  return (
    <div className="App">
      <div>
        <a href="https://tautorn.com.br" target="_blank">
          <img src={logo} className="logo tautorn tech" alt="Tautorn Tech Logo" title="Tautorn Tech Logo" />
        </a>

        <div>
          <button onClick={() => setVersion('current')}>Current Version</button>
          <button onClick={() => setVersion('experimental')}>Experimental Version</button>
        </div>

        <div style={{ margin: '2rem'}}>
          <button onClick={() => setCardClass('warlock')}>Warlock</button>
          <button onClick={() => setCardClass('druid')}>Druid</button>
          <button onClick={() => setCardClass('mage')}>Mage</button>
          <button onClick={() => setCardClass('warrior')}>Warrior</button>
        </div>

        {version === 'current' && (<CurrentVersion cardClass={cardClass} />)}
        {version === 'experimental' && (<ExperimentalVersion cardClass={cardClass} />)}

      </div>
    </div>
  )
}

export default App
