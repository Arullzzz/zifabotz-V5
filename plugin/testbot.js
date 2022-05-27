let handler = async (m, { conn }) => {
let caption = `*tas tes tas tes,donasi kek njing🗿*`

conn.sendButton( m.chat, caption, `©️ ArullBotz`, `BISA ARULL`, `.😋`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
