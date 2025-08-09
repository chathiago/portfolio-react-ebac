import styled from "styled-components";
import type { Props } from './index';

export const P = styled.p <Props> `
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.tipo === 'principal' ? props.theme.corPrimaria : props.theme.corSecundaria)};
  line-height: 22px;
`
