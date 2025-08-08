import EstiloGlobal, { Container } from './globalstyle'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import Projetos from './Containers/Projetos'

function App() {

  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre></Sobre>
          <Projetos></Projetos>
        </main>
      </Container>
    </>
  )
}

export default App
