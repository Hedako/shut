const fs = require('fs');
const chalk = require('chalk');

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "242067712688"],
global.ownername = process.env.OWNER_NAME || "SatoruTech",
global.ytname = "YT: SatoruTech"
global.socialm = "GitHub: SatoruTech"
global.location = "Africa"

global.botname = process.env.BOTNAME || "Anna-Md",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "Anna-Md",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "SatoruTech",
//console view/theme
global.themeemoji = '𓅃'
global.wm = "SatoruTech"

//theme link
global.link = 'https://whatsapp.com/channel/0029Vanj84h6rsQmGlOrMz1X'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = false //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
 done: '💫 *Voici, sensei !*',
 prem: '💫 *Bonjour senpai, cette fonctionnalité est réservée aux utilisateurs premium uniquement*',
 admin: '💫 *Bonjour senpai, cette fonctionnalité est réservée aux administrateurs uniquement*',
 botAdmin: '💫 *Senpai, cette fonctionnalité ne peut être utilisée que lorsque le bot est administrateur du groupe*',
 owner: '💫 *Bonjour senpai, cette fonctionnalité est réservée au propriétaire uniquement*',
 group: '💫 *Sensei, cette fonctionnalité est exclusivement pour les groupes*',
 private: '💫 *Bonjour senpai, cette fonctionnalité est exclusivement pour les chats privés*',
 wait: '💫 *Bonjour senpai, en cours de traitement...*',
 error: '💫 *Bonjour senpai, il semble y avoir une erreur !*'

}
module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"false",
}

global.thumb = fs.readFileSync('./lib/Assets/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
    
