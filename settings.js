//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['258848858288']
global.premium = ['258848858288']
global.ownernomer = '258848858288'
global.ownername = '🦄Boss'
global.botname = 'Gumbot'
global.footer = 'Workx Tech.'
global.ig = 'https://github.com/emersontfc'
global.region = 'Mozambique, Sul, Maputo'
global.sc = 'https://github.com/emersontfc/jarvex'
global.myweb = 'https://instagram.com/emerson.tfc'
global.packname = 'Cheems Bot'
global.author = '🦄Gumbot Boss'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Pronto ✓',
    admin: 'Este recurso é apenas para administrador!',
    botAdmin: 'Torne-me um administrador primeiro!',
    owner: 'Este recurso é apenas para o proprietário!',
    group: 'Recurso usado apenas para grupos!',
    private: 'Recursos usados ​​apenas para bate-papo privado!',
    bot: 'Este recurso é apenas para mim',
    wait: 'Cauma rapaz estou processando seu pedido...',
    error: 'Erro! Talvez a chave da API esteja expirada🤔!',
    endLimit: 'Seu limite diário expirou, o limite será redefinido a cada 12 horas',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
