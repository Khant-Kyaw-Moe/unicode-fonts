import { knownCharCodeAt } from './knownCharCodeAt';
import { Font } from './types'

export const convertChar = (char: string, font: Font, reverse = false): string => {
    const left = reverse ? 1 : 0;
    const right = reverse ? 0 : 1;
    if (font.missing.includes(char)) {
        return char[0];
    } else {
        const charCode = knownCharCodeAt(char, 0)
        const n = font.chars.find(a => a[left] === charCode)!
        if (!n) {
            return char[0];
        } else {
            try {
                const o = String.fromCodePoint(n[right])
                return o;
            } catch (ex) {
                console.log('Error in character ', n, String.fromCodePoint(n[left]), 'of font', font.name)
                return char[0];
            }
        }
    }
}