import { getFonts } from '../src/getFonts'
import { transform } from '../src/transform'
import { revertTransform } from '../src/revert'
const s = 'Hello World. How are you today 0123456789'
const t = `==>
 Hello World. How are you today 0123456789
 Hello World.   How are you today 0123456789
 * 𝐇𝐄𝐋𝐋𝐎 𝐖𝐎𝐑𝐋𝐃, 𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟔𝟖𝟗 : bold
 * 𝐻𝐸𝐿𝐿𝑂 𝑊𝑂𝑅𝐿𝐷, 01234567689 : italic
 * 𝑯𝑬𝑳𝑳𝑶 𝑾𝑶𝑹𝑳𝑫, 01234567689 : boldItalic
 * He𝒧𝒧o 𝒲o𝒭𝒧𝒟, 01234567689 : scriptItalic
 * 𝓗𝓔𝓛𝓛𝓞 𝓦𝓞𝓡𝓛𝓓, 01234567689 : scriptBold
 * H𝔈𝔏𝔏𝔒 𝔚𝔒𝔕𝔏𝔇, 01234567689 : fraktur
 * 𝕳𝕰𝕷𝕷𝕺 𝖂𝕺𝕽𝕷𝕯, 01234567689 : boldFraktur
 * H𝔼𝕃𝕃𝕆 𝕎𝕆𝕉𝕃𝔻, 𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟞𝟠𝟡 : doubleStruck
 * 𝖧𝖤𝖫𝖫𝖮 𝖶𝖮𝖱𝖫𝖣, 𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟨𝟪𝟫 : sansSerif
 * 𝗛𝗘𝗟𝗟𝗢 𝗪𝗢𝗥𝗟𝗗, 𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟲𝟴𝟵 : sansSerifBold
 * 𝘏𝘌𝘓𝘓𝘖 𝘞𝘖𝘙𝘓𝘋, 01234567689 : sansSerifItalic
 * 𝙃𝙀𝙇𝙇𝙊 𝙒𝙊𝙍𝙇𝘿, 01234567689 : sansSerifBoldItalic
 * 𝙷𝙴𝙻𝙻𝙾 𝚆𝙾𝚁𝙻𝙳, 𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟼𝟾𝟿 : monospace
 * ᴴᴱᴸᴸᴼ ᵂᴼᴿᴸᴰ, ⁰¹²³⁴⁵⁶⁷⁶⁸⁹ : super
 * 🄗🄔🄛🄛🄞 🄦🄞🄡🄛🄓, 0⑴⑵⑶⑷⑸⑹⑺⑹⑻⑼ : parenthesized
 * ⒽⒺⓁⓁⓄ ⓌⓄⓇⓁⒹ, 0①②③④⑤⑥⑦⑥⑧⑨ : circled
 * 🄷🄴🄻🄻🄾 🅆🄾🅁🄻🄳, 01234567689 : squaredCapital
 * 🅗🅔🅛🅛🅞 🅦🅞🅡🅛🅓, 01234567689 : negativeCircledCapital
 * 🅷🅴🅻🅻🅾 🆆🅾🆁🅻🅳, 01234567689 : negativeSquaredCapital
 * 🇭🇪🇱🇱🇴 🇼🇴🇷🇱🇩, 01234567689 : regionalIndicatorSymbol
 * ＨＥＬＬＯ ＷＯＲＬＤ, ０１２３４５６７６８９ : fullWidth
 * ꓧꓰꓡꓡꓳ ꓪꓳꓣꓡꓓ, 01234567689 : myanmar
 * ᎻᎬᏞᏞᎤ ᏔᎤᎡᏞᎠ, ᎾᏐ23Ꮞ5Ꮾ7Ꮾ8Ꮽ : cherokee
 * Hello World, ⅠⅡⅢⅣⅤⅥⅦⅧⅦⅨⅩ : romanNumerals
 * Hello World, ⅳⅴⅵⅶⅷⅸⅹⅺⅹⅻⅼ : romanNumeralsSmall
`

const fonts = getFonts()
console.log(s)
console.log(transform(s, fonts.bold))
console.log(transform(s, fonts.italic))
console.log(transform(s, fonts.boldItalic))
console.log(transform(s, fonts.scriptItalic))
console.log(transform(s, fonts.scriptBold))
console.log(transform(s, fonts.fraktur))
console.log(transform(s, fonts.boldFraktur))
console.log(transform(s, fonts.doubleStruck))
console.log(transform(s, fonts.sansSerif))
console.log(transform(s, fonts.sansSerifBold))
console.log(transform(s, fonts.sansSerifItalic))
console.log(transform(s, fonts.sansSerifBoldItalic))
console.log(t)
console.log(revertTransform(t))
