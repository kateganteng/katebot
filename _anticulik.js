let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `
KLO MAU W MASUK BAYAR JAMAL
`, m)
this.sendContact(m.chat, '6288289338073', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler