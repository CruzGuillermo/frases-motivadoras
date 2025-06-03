import React from 'react'

const QuoteBox = ({ quote, onNext }) => {
  return (
    <div className="quote-box">
      <p>"{quote}"</p>
      <button onClick={onNext}>Nueva frase</button>
    </div>
  )
}

export default QuoteBox
