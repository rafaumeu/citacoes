import React from 'react'
import { render } from '@testing-library/react'

import Citacao from '../components/Citacao'

test('Renderiza o componente Citacao corretamente', () => {
  const { getByText } = render(<Citacao />)
  const elementoCitacao = getByText(/Citacao/i)

  expect(elementoCitacao).toBeInTheDocument()
})
