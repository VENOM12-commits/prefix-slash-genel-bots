const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
exports.run = async (client, message, args) => {
let not = args.slice(0).join(" ")
if (!not) return message.reply("Lütfen bir not yaz! kral")
message.reply("<:tik:1271885114812530809> Notun Başarıyla Kayıt Edildi!")
debe.set(`not_${message.author.id}`, not)
}



exports.conf = {
  aliases: ['notal']
}

exports.help = {
  name: "not-al"
}