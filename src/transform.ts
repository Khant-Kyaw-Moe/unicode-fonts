import { convertChar } from './convertChart';
import { Font } from './types'

export function transform(s: string, font: Font, join: number = -1) {
  const output: string[] = []
  for (let i = 0; i < s.length; i++) {
    output.push(convertChar(s[i], font))
  }
  return output.join(join < 0 ? '' : String.fromCodePoint(join))
}