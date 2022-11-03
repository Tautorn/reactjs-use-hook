import { useEffect, useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [data, setData] = useState([])


  useEffect(() => {

    const fetchCards = async () => {
      const response = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/warlock', {
        headers: {
          'X-RapidAPI-Key': '887bc695b8mshe3c038e7d30b7b9p1071d9jsn37965fc7ed2c',
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
      })

      const dataResponse = await response.json()


      setData((dataResponse.filter((card: any) => card.img)).slice(0, 49))
    }

    fetchCards()
      .catch(console.error)

   

  }, [])

  const renderClasses = (card: any, key: number) => {
    return (
        <img key={key} src={card.img} alt={card.name} />
    )
  }

  return (
    <div className="App">
      <div>
        <a href="https://tautorn.com.br" target="_blank">
          <img src={logo} className="logo tautorn tech" alt="Tautorn Tech Logo" />
        </a>
      </div>
      {data?.map(renderClasses)}
    </div>
  )
}

export default App
