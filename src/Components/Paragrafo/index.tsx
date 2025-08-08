import { P } from './style'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundaria'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) =>
  (<P fontSize={fontSize} tipo={tipo}>{children}</P>)

export default Paragrafo
