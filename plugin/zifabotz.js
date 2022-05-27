let handler = async (m, { conn }) => {
let caption = `*(￣ヘ￣）APA WOY MANGGIL BOT Arull*`

conn.sendButton( m.chat, caption, `©️ ArullBotz`, `Menu`, `.?`, m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
