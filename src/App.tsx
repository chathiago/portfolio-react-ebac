import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './globalstyle'

import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import Projetos from './Containers/Projetos'

import temaLight from './Themes/light'
import temaDark from './Themes/dark'


function App() {

  const [usarTemaDark, setUsarTemaDark] = useState(false)
  function alternarTema() {
    setUsarTemaDark(!usarTemaDark) // Alterna entre true e false
  }

  return (
    <ThemeProvider theme={usarTemaDark ? temaDark: temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar alternarTema={alternarTema} />
        <main>
          <Sobre></Sobre>
          <Projetos></Projetos>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
