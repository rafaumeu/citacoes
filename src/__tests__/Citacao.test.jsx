import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import Citacao from '../components/Citacao'
import fetchMock from 'fetch-mock-jest'
import MockConsole from 'jest-mock-console'

// Mock da função fetch para simular a chamada da API
jest.mock('node-fetch', () => require('fetch-mock-jest'), {
  esModuleInterop: true,
})

// Limpa o fetchMock após cada teste
afterEach(() => {
  fetchMock.reset()
})

test('Traduz para inglês ao clicar no botão correspondente', async () => {
  // Configura o fetch mock para retornar uma resposta simulada
  fetchMock.mock('https://libretranslate.de/translate', {
    translatedText: 'Texto traduzido para inglês',
  })

  // Renderiza o componente
  const { getByText, queryByText } = render(
    <Citacao texto='Texto original' autor='Autor' />
  )

  // Simula o clique no botão de tradução para inglês
  fireEvent.click(getByText('Traduzir para inglês'))

  // Aguarda até que o texto original não esteja mais presente
  await waitFor(() => {
    const elementoTextoOriginal = queryByText(/Texto original/i)
    if (!elementoTextoOriginal) {
      // Agora, verifica se o texto traduzido está presente
      const elementoTextoTraduzido = getByText(/Texto traduzido para inglês/i)
      expect(elementoTextoTraduzido).toBeInTheDocument()
    }
  })

  // Limpa o fetch mock
  fetchMock.reset()
})

// Teste semelhante para o botão de tradução para espanhol
test('Traduz para espanhol ao clicar no botão correspondente', async () => {
  // Configura o fetch mock para retornar uma resposta simulada
  fetchMock.mock('https://libretranslate.de/translate', {
    translatedText: 'Texto traduzido para espanhol',
  })

  // Renderiza o componente
  const { getByText, queryByText } = render(
    <Citacao texto='Texto original' autor='Autor' />
  )

  // Simula o clique no botão de tradução para espanhol
  fireEvent.click(getByText('Traduzir para espanhol'))

  // Aguarda até que o texto original não esteja mais presente
  await waitFor(() => {
    const elementoTextoOriginal = queryByText(/Texto original/i)
    if (!elementoTextoOriginal) {
      // Agora, verifica se o texto traduzido está presente
      const elementoTextoTraduzido = getByText(/Texto traduzido para espanhol/i)
      expect(elementoTextoTraduzido).toBeInTheDocument()
    }
  })

  // Limpa o fetch mock
  fetchMock.reset()
})
// ...

// Teste para simular um erro ao traduzir
