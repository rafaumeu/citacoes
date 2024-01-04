import React from 'react'
import { fireEvent, render } from '@testing-library/react'
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
})
