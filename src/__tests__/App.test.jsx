import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})
describe('proximaCitacao', () => {
  it('proximaCitacao incrementa o índice corretamente', () => {
    const { getByText } = render(<App />)

    // Obtém o texto da citação antes de clicar no botão
    const textoAntes = getByText(/[^<p>]([\s]*(.*)?[\s]*)\./).textContent

    // Clica no botão "Próxima citação"
    fireEvent.click(getByText('Próxima citação'))

    // Obtém o texto da citação após clicar no botão
    const textoDepois = getByText(/[^<p>]([\s]*(.*)?[\s]*)\./).textContent

    // Verifica se o texto depois de clicar é diferente do texto antes
    expect(textoDepois).not.toBe(textoAntes)
  })
  it('Renderiza o componente App corretamente', async () => {
    // Renderiza o componente
    const { getByText } = render(<App />)

    // Verifica se a citação original está presente
    const elementoTextoOriginal = getByText(
      /A vida é o que acontece enquanto você está ocupado fazendo outros planos./i
    )
    expect(elementoTextoOriginal).toBeInTheDocument()

    // Simula o clique no botão "Próxima citação"
    fireEvent.click(getByText('Próxima citação'))

    // Aguarda a mudança de citação ser concluída
    await waitFor(() => {
      // Verifica se a nova citação está presente (pode precisar ajustar dependendo das suas citações)
      const elementoNovaCotacao = getByText(/[^<p>]([\s]*(.*)?[\s]*)\./) // Substitua pela string esperada na nova citação
      expect(elementoNovaCotacao).toBeInTheDocument()
    })
  })
})
