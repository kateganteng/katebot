// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to kannachann
// thank you to ALL Bot creator
// and thanks you to who support my Bot
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})

gc1 = 'https://chat.whatsapp.com/GDSdQlUvcvj4tti6fROPHR'
gc2 = 'https://chat.whatsapp.com/FNDWauX031OI6I3u7QjrHO'
gc3 = 'https://chat.whatsapp.com/E1befxNQq4jGsPKmpaBmnv'

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/*function image() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = fs.readFileSync('./src/logo3.jpg')
    if (time >= 4) {
        res = fs.readFileSync('./src/logo3.jpg')
    }
    if (time > 10) {
        res = fs.readFileSync('./src/logo3.jpg')
    }
    if (time >= 15) {
        res = fs.readFileSync('./src/logo2.jpg')
    }
    if (time >= 18) {
        res = fs.readFileSync('./src/logo2.jpg')
    }
    return res
}*/

global.DeveloperMode = 'false' //Buat Mode True False Moderator
global.linkGC = ['https://chat.whatsapp.com/F9dPQcOf82Z4Dc9uxE7Kh0'] // ganti jadi group lu
global.owner = ['6287713478472', '6287713478472'] // Ganti jadi nomor lu ajg nanti ngechat bot lu pas sv database
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'a42732e435f1e014',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'amel',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'XYNDYKATZ BOT'
global.author = '۰ WABOT 2022'

// silakan di ganti klo mau
global.botwm = `© X Y N D Y K A T Z | B O T`//UBAH JADI NAMAMU
global.botdate = `❏ ${time}\n❏ ${week} ${date}`
global.imagebot = `https://telegra.ph/file/8212340502d985bec0e93.jpg`
global.logo = fs.readFileSync('./src/logo3.jpg')
global.logoowner = fs.readFileSync('./src/owner.jpg')
global.wait = '```[ ! ] wait...```'
global.rpg = '[ ! ] Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT'
global.nsfw = '[ ! ] Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '```404 error```'
global.pref = '( # . ! /)'
global.CanvasAPI = '';
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.multiplier = 36 // The higher, The harder levelup
global.mesreport = 50

global.ext = {
	title: 'Sabar sedang di proses',
	body: 'X Y N D Y K A T Z • B O T',
	thum: 'https://telegra.ph/file/6dda1605da25159c056de.jpg'
}

global.mess = {
	wait: '*⏱️ Mohon Tunggu Sebentar~*',
	error: '*MOHON TUNGGU SEBENAR ....*',
	owner: 'Maaf fitur ini hanya bisa digunakan oleh *Owner*',
	mods: 'Maaf fitur ini hanya bisa digunakan oleh *Moderator*',
	premium: 'Maaf fitur ini hanya bisa digunakan oleh user *Premium*',
	group: 'Maaf fitur ini hanya bisa digunakan di *Group*',
	private: 'Maaf fitur ini hanya bisa digunakan di *Private*',
	admin: 'Maaf fitur ini hanya bisa digunakan *Admin*',
    botAdmin: 'Jadikan bot sebagai *Admin* untuk menggunakan fitur ini',
    unreg: '── 「 NOT REGISTERED 」 ──\nSilakan Register Terlebih Dahulu Sebelum Menggunakan Bot. Cara Register Cukup Dengan Command *.daftar nama.umur*\nContoh .daftar ' + ext.body + '.24\n\nNote\nHarap Save Serial Number Mu Agar Bisa Melakukan Unreg Database Bot',
    sukses: '☑️ Done~',
    wm: '© X Y N D Y K A T Z',
    promote: '「 PROMOTE - DETECTED 」\nTarget : @user\nStatus : Member -> Admin\nSELAMAT KAMU JADI ADMIN',
    demote: '「 DEMOTE - DETECTED 」\nTarget : @user\nStatus : Admin -> Member\nYAHAHA KASIAN KENA DEMOTE'
}

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 16 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})