import { buildFont } from './buildFont'
import { Font } from './types'

export function getFonts() {
  if (!fonts) {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ၀, ၁, ၂, ၃, ၄, ၅, ၆, ၇, ၈, ၉]
    const lower = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ]
    const upper = lower.map(l => l.toUpperCase())
    fonts = {}
    fonts['bold'] = buildFont(0x1d400, 0x1d41a, 0x1d7ce, [], 'bold', 'Mathematical Alphanumeric Symbols')
    fonts['italic'] = buildFont(
      0x1d434,
      0x1d44e,
      0,
      [...digits],
      'italic',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['boldItalic'] = buildFont(
      0x1d468,
      0x1d482,
      0,
      [...digits],
      'boldItalic',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['scriptItalic'] = buildFont(
      0x1d49c,
      0x1d4b6,
      0,
      ['e', 'g', 'o', 'B', 'F', 'H', 'I', 'L', 'M', 'R', ...digits],
      'scriptItalic',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['scriptBold'] = buildFont(
      0x1d4d0,
      0x1d4ea,
      0,
      [...digits],
      'scriptBold',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['fraktur'] = buildFont(
      0x1d504,
      0x1d51e,
      0,
      ['C', 'H', 'R', ...digits],
      'fraktur',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['boldFraktur'] = buildFont(
      0x1d56c,
      0x1d586,
      0,
      digits,
      'boldFraktur',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['doubleStruck'] = buildFont(
      0x1d538,
      0x1d552,
      0x1d7d8,
      ['C', 'H', 'R', 'P', 'Q'],
      'doubleStruck',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['sansSerif'] = buildFont(
      0x1d5a0,
      0x1d5ba,
      0x1d7e2,
      [],
      'sansSerif',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['sansSerifBold'] = buildFont(
      0x1d5d4,
      0x1d5ee,
      0x1d7ec,
      [],
      'sansSerifBold',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['sansSerifItalic'] = buildFont(
      0x1d608,
      0x1d622,
      0,
      [...digits],
      'sansSerifItalic',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['sansSerifBoldItalic'] = buildFont(
      0x1d63c,
      0x1d656,
      0,
      [...digits],
      'sansSerifBoldItalic',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )
    fonts['monospace'] = buildFont(
      0x1d670,
      0x1d68a,
      0x1d7f6,
      [],
      'monospace',
      'From Unicode category "Mathematical Alphanumeric Symbols"'
    )

    const phonetic = [
      0x1d2c,
      0x1d2e,
      0x1d04,
      0x1d30,
      0x1d31 /*e*/,
      0x1d73,
      0x1d33,
      0x1d34,
      0x1d35,
      0x1d36,
      0x1d37,
      0x1d38,
      0x1d39,
      0x1d3a,
      0x1d3c,
      0x1d3e /*p*/,
      0x1d13,
      0x1d3f,
      0,
      0x1d40,
      0x1d41,
      0x1d20,
      0x1d42,
      0,
      0,
      0x1d22
    ]
    fonts['super'] = buildFont(
      phonetic,
      phonetic,
      [0x2070, 0x00b9, 0x00b2, 0x00b3, 0x2074, 0x2075, 0x2076, 0x2077, 0x2078, 0x2079],
      [],
      'super',
      'Uses Unicode Category "Phonetic Extensions" for letters and "SuperScripts and Subscripts" for digits'
    )

    fonts['parenthesized'] = buildFont(
      0x1f110,
      0x249c,
      0x2473,
      ['0'],
      'parenthesized',
      'From Unicode category "Enclosed Alphanumeric Supplement"'
    )
    fonts['circled'] = buildFont(
      0x24b6,
      0x24d0,
      0x245f,
      ['0'],
      'circled',
      'From Unicode category "Enclosed Alphanumeric Supplement"'
    )
    fonts['squaredCapital'] = buildFont(
      0x1f130,
      0x1f130,
      0,
      [...digits],
      'squaredCapital',
      'From Unicode category "Enclosed Alphanumeric Supplement"'
    )
    fonts['negativeCircledCapital'] = buildFont(
      0x1f150,
      0x1f150,
      0,
      [...digits],
      'negativeCircledCapital',
      'From Unicode category "Enclosed Alphanumeric Supplement"'
    )

    fonts['negativeSquaredCapital'] = buildFont(
      0x1f170,
      0x1f170,
      0,
      [...digits],
      'negativeSquaredCapital',
      'From Unicode category "Enclosed Alphanumeric Supplement"'
    )
    fonts['regionalIndicatorSymbol'] = buildFont(
      0x1f1e6,
      0x1f1e6,
      0,
      [...digits],
      'regionalIndicatorSymbol',
      'From Unicode category "Enclosed Alphanumeric Supplement"'
    )

    fonts['fullWidth'] = buildFont(
      0xff21,
      0xff41,
      0xff10,
      [],
      'fullWidth',
      'From Unicode category "Enclosed Alphanumeric Supplement"'
    )

    fonts['myanmar'] = buildFont(
      [
        0xa4ee,
        0xa4d0,
        0xa4da,
        0xa4d3,
        0xa4f0,
        0xa4dd,
        0xa4d6,
        0xa4e7,
        0xa4f2,
        0xa4d9 /*j*/,
        0xa4d7,
        0xa4e1,
        0xa4df,
        0xa4e0,
        0xa4f3 /* O */,
        0xa4d1,
        0xa4db,
        0xa4e3,
        0xa4e2,
        0xa4d4 /*T*/,
        0xa4f4,
        0xa4e6,
        0xa4ea,
        0xa4eb,
        0xa4ec,
        0xa4dc
      ],
      [
        0xa4ee,
        0xa4d0,
        0xa4da,
        0xa4d3,
        0xa4f0,
        0xa4dd,
        0xa4d6,
        0xa4e7,
        0xa4f2,
        0xa4d9 /*j*/,
        0xa4d7,
        0xa4e1,
        0xa4df,
        0xa4e0,
        0xa4f3 /* O */,
        0xa4d1,
        0xa4db,
        0xa4e3,
        0xa4e2,
        0xa4d4 /*T*/,
        0xa4f4,
        0xa4e6,
        0xa4ea,
        0xa4eb,
        0xa4ec,
        0xa4dc
      ],
      0,
      [...digits],
      'myanmar',
      'From Unicode category "Myanmar Extended-B"'
    )

    const myanmarReversedChars = [
      0xa4ef,
      0xa4ed,
      0xa4db,
      0xa4d3,
      0xa4f1,
      0xa4de,
      0xa4d8 /*G*/,
      0xa4e7,
      0xa4f2,
      0xa4d9 /*j*/,
      0xa4d8,
      0xa4f6,
      0xa4ea,
      0xa4df,
      0xa4e0,
      0xa4f3 /* O */,
      0xa4d2,
      0xa4d7,
      0xa4e4,
      0xa4e2,
      0xa4d5 /*T*/,
      0xa4f5,
      0xa4e6,
      0xa4df,
      0xa4eb,
      0xa4ec,
      0xa4dc
    ]
    fonts['myanmarReversed'] = buildFont(
      myanmarReversedChars,
      myanmarReversedChars,
      0,
      [...digits],
      'myanmarReversed',
      'From Unicode category "Myanmar Extended-B"'
    )
    0x1f1e6

    // const c = '\u1f1fc'

    const cherokee = [
      0x13aa,
      0x13f4,
      0x13df,
      0x13a0,
      0x13ac,
      0x13b0,
      0x13b6 /*g*/,
      0x13bb,
      0x13d0,
      0x13ab,
      0x13e6 /*k*/,
      0x13de,
      0x13b7,
      0,
      0x13a4,
      0x13e2,
      0x13eb /* Q*/,
      0x13a1,
      0x13da,
      0x13a2,
      0x13cc,
      0x13d9,
      0x13d4,
      0 /*x*/,
      0x13bd,
      0x13c3
    ]
    fonts['cherokee'] = buildFont(
      cherokee,
      cherokee,
      [0x13be, 0x13d0, 0, 0, 0x13ce, 0, 0x13ee, 0, 0, 0x13ed],
      ['n', 'N', 'x', 'X', '2', '3', '5', '7', '8'],
      'cherokee',
      'From Unicode category "cherokee"'
    )

    fonts['romanNumerals'] = buildFont(
      0,
      0,
      0x2160,
      [...lower, ...upper],
      'romanNumerals',
      'From Unicode category "CJK Compatibility Forms"'
    )
    fonts['romanNumeralsSmall'] = buildFont(
      0,
      0,
      0x2173,
      [...lower, ...upper],
      'romanNumeralsSmall',
      'From Unicode category "CJK Compatibility Forms"'
    )
  }

  return fonts!
}
let fonts: {
  [name: string]: Font
}
