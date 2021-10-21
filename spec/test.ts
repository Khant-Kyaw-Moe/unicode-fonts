import { getFonts } from '../src/getFonts'
import { transform } from '../src/transform'
import { revertTransform } from '../src/revert'
const s = 'Hello World. How are you today 0123456789'
const t = `==>
 Hello World. How are you today 0123456789
 Hello World.   How are you today 0123456789
Hello World. How are you today 0123456789
𝐇𝐄𝐋𝐋𝐎 𝐖𝐎𝐑𝐋𝐃. 𝐇𝐎𝐖 𝐀𝐑𝐄 𝐘𝐎𝐔 𝐓𝐎𝐃𝐀𝐘 𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗
𝐻𝐸𝐿𝐿𝑂 𝑊𝑂𝑅𝐿𝐷. 𝐻𝑂𝑊 𝐴𝑅𝐸 𝑌𝑂𝑈 𝑇𝑂𝐷𝐴𝑌 0123456789
𝑯𝑬𝑳𝑳𝑶 𝑾𝑶𝑹𝑳𝑫. 𝑯𝑶𝑾 𝑨𝑹𝑬 𝒀𝑶𝑼 𝑻𝑶𝑫𝑨𝒀 0123456789
He𝒧𝒧o 𝒲o𝒭𝒧𝒟. Ho𝒲 𝒜𝒭e 𝒴o𝒰 𝒯o𝒟𝒜𝒴 0123456789
𝓗𝓔𝓛𝓛𝓞 𝓦𝓞𝓡𝓛𝓓. 𝓗𝓞𝓦 𝓐𝓡𝓔 𝓨𝓞𝓤 𝓣𝓞𝓓𝓐𝓨 0123456789
H𝔈𝔏𝔏𝔒 𝔚𝔒𝔕𝔏𝔇. H𝔒𝔚 𝔄𝔕𝔈 𝔜𝔒𝔘 𝔗𝔒𝔇𝔄𝔜 0123456789
𝕳𝕰𝕷𝕷𝕺 𝖂𝕺𝕽𝕷𝕯. 𝕳𝕺𝖂 𝕬𝕽𝕰 𝖄𝕺𝖀 𝕿𝕺𝕯𝕬𝖄 0123456789
H𝔼𝕃𝕃𝕆 𝕎𝕆𝕉𝕃𝔻. H𝕆𝕎 𝔸𝕉𝔼 𝕐𝕆𝕌 𝕋𝕆𝔻𝔸𝕐 𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡
𝖧𝖤𝖫𝖫𝖮 𝖶𝖮𝖱𝖫𝖣. 𝖧𝖮𝖶 𝖠𝖱𝖤 𝖸𝖮𝖴 𝖳𝖮𝖣𝖠𝖸 𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫
𝗛𝗘𝗟𝗟𝗢 𝗪𝗢𝗥𝗟𝗗. 𝗛𝗢𝗪 𝗔𝗥𝗘 𝗬𝗢𝗨 𝗧𝗢𝗗𝗔𝗬 𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵
𝘏𝘌𝘓𝘓𝘖 𝘞𝘖𝘙𝘓𝘋. 𝘏𝘖𝘞 𝘈𝘙𝘌 𝘠𝘖𝘜 𝘛𝘖𝘋𝘈𝘠 0123456789
𝙃𝙀𝙇𝙇𝙊 𝙒𝙊𝙍𝙇𝘿. 𝙃𝙊𝙒 𝘼𝙍𝙀 𝙔𝙊𝙐 𝙏𝙊𝘿𝘼𝙔 0123456789
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
console.log(revertTransform(t))
