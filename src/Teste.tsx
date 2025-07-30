import styled from "styled-components"

type BotaoProps = {
  principal: boolean;
  fontsize?: string
}

const Botao = styled.button <BotaoProps> `
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontsize || '16px'}
`

const BotaoPerigo = styled(Botao) `
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
    cursor: pointer;
  }
`

function Teste() {
  return (
    <div>
      <h1>Olá Mundo.</h1>
      <Botao principal>Enviar</Botao>
      <Botao fontsize="14px" principal={false}>Cancelar</Botao>
      <BotaoPerigo principal>Não clique</BotaoPerigo>
      <BotaoPerigo as="a" principal><span>botao tag a</span></BotaoPerigo>
    </div>
  )
}

export default Teste
