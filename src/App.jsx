import { useState } from 'react'
import quotes from './quotes'
import QuoteBox from './components/QuoteBox'
import './styles.css'

function App() {
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length))

  const nextQuote = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * quotes.length)
    } while (newIndex === index)
    setIndex(newIndex)
  }

  return (
    <div className="app">
      <h1>Frases Motivadoras 💪</h1>
      <QuoteBox quote={quotes[index]} onNext={nextQuote} />
    </div>
  )
}

export default App
