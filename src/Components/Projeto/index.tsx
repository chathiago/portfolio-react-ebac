import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import { Card, LinkButton } from "./style";

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundaria">Lista feita com React VueJS</Paragrafo>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Projeto;
