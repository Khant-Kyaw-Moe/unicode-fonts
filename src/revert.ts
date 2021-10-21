import { convertChar } from './convertChart';
import { getFonts } from './getFonts';
import { Font } from './types';

const returnLine = `
`
const convertCharFont = (fonts: Font[], s: string) => {
    for (let i = 0; i < fonts.length; i++) {
        const font = fonts[i];
        const newChar = convertChar(s, font, true)
        if (s[0] !== returnLine && newChar !== s[0]) {
            return newChar;
        }
    }
    return s[0];
}

export function revertTransform(s: string, join: number = -1) {
    const fonts = Object.values(getFonts());
    const output: string[] = []
    for (let i = 0; i < s.length; i++) {
        const res = convertCharFont(fonts, s.slice(i, i + 2))
        if (s[i] !== res) {
            output.push(res)
            i++;
        } else {
            output.push(s[i])
        }
    }
    return output.join(join < 0 ? '' : String.fromCodePoint(join)).toLowerCase();
}

