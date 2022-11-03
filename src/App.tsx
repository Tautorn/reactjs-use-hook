import { cache, use, Suspense, useState } from "react"
import logo from './assets/logo.png'
import './App.css'

const fetchCards = cache(async (id: string) => {
  const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${id}`, {
    headers: {
      'X-RapidAPI-Key': '887bc695b8mshe3c038e7d30b7b9p1071d9jsn37965fc7ed2c',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  })

  const dataResponse = await response.json()

  return (dataResponse.filter((card: any) => card.img)).slice(0, 19)
})

interface CardsProps {
  id: string
}

function Cards({ id }: CardsProps) {
  const cards = use(fetchCards(id))

  const renderClasses = (card: any, key: number) => {
    return (
      <img key={key} src={card.img} alt={card.name} />
    )
  }

  return (
    <div>
      {cards?.map(renderClasses)}
    </div>
  )
}


function App() {
  const [cardClass, setCardClass] = useState<string>('warlock')

  return (
    <div className="App">
      <div>
        <a href="https://tautorn.com.br" target="_blank">
          <img src={logo} className="logo tautorn tech" alt="Tautorn Tech Logo" title="Tautorn Tech Logo" />
        </a>
      </div>
      <div>
        <button onClick={() => setCardClass('warlock')}>Warlock</button>
        <button onClick={() => setCardClass('druid')}>Druid</button>
        <button onClick={() => setCardClass('mage')}>Mage</button>
        <button onClick={() => setCardClass('warrior')}>Warrior</button>
      </div>
      <Suspense fallback={<h2>Loading…</h2>}>
        <Cards id={cardClass} />
      </Suspense>
    </div>
  )
}

export default App
