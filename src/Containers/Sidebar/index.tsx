import Avatar from "../../Components/Avatar"
import Paragrafo from "../../Components/Paragrafo"
import Titulo from "../../Components/Titulo"

import { BotaoTema, Descricao, SidebarContainer } from "./style"

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Thiago Sam</Titulo>
      <Paragrafo tipo="secundaria" fontSize={16}>@chathiago</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Engenheiro Front-End</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
