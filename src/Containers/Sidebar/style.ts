import styled from "styled-components";
import { P } from "../../Components/Paragrafo/style";

export const Descricao = styled(P) `
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  border-radius: 12px;
  color: ${(props) => props.theme.corFundo};
  background-color: ${(props) => props.theme.corPrimaria};
  cursor: pointer;
`
export const SidebarContainer = styled.div `
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
