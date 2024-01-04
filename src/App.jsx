import React, { useState } from 'react'
import Citacao from './components/Citacao'
import citacoes from './data'

function App() {
  const [indice, setIndice] = useState(0)
  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length)
  }
  return (
    <div className='container mt5'>
      <Citacao texto={citacoes[indice].texto} autor={citacoes[indice].autor} />
      <button className='btn btn-success mt2' onClick={proximaCitacao}>
        Próxima citação
      </button>
    </div>
  )
}

export default App
