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
            return { newChar, font: font.name };
        }
    }
    return { newChar: s[0], font: null};
}

const jumpTwo = [
'bold',
'italic',
'boldItalic',
'scriptItalic',
'scriptBold',
'fraktur',
'boldFraktur',
'doubleStruck',
'sansSerif',
'sansSerifBold',
'sansSerifItalic',
'sansSerifBoldItalic',
'monospace',
'squaredCapital',
'negativeCircledCapital',
'negativeSquaredCapital',
'regionalIndicatorSymbol',
'parenthesized', // something weird with the numbers
]
const parentesisExceptions = '⑴⑵⑶⑷⑸⑹⑺⑹⑻⑼'
export function revertTransform(s: string, join: number = -1) {
    const fonts = Object.values(getFonts());
    const output: string[] = []
    for (let i = 0; i < s.length; i++) {
        const { newChar, font} = convertCharFont(fonts, s.slice(i, i + 4 <= s.length ? i + 4 : s.length))
        if (s[i] !== newChar && font) {
            output.push(newChar)
            if (jumpTwo.includes(font) && !parentesisExceptions.includes(s[i])) {
                i++;
            }
        } else {
            output.push(s[i])
        }
    }
    return output.join(join < 0 ? '' : String.fromCodePoint(join)).toLowerCase();
}

