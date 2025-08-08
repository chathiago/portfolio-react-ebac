import styled from "styled-components";
import type { Props } from './index';

export const Titulos = styled.h3 <Props> `
  color: #282A35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px
`
