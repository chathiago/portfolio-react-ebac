import 'styled-components';

const temaLight = {
  corPrimaria: '#282a35',
  corSecundaria: '#949494',
  corFundo: '#ffff',
  corFundoBotao: '#4476bf',
  corBorda: '#c1c1c1',
}

export default temaLight;

// declaração do tema padrão
declare module 'styled-components' {
  export interface DefaultTheme {
    corPrimaria: string;
    corSecundaria: string;
    corFundo: string;
    corFundoBotao: string;
    corBorda: string;
  }
}
