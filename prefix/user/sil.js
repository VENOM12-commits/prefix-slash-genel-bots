const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("Rolleri Yönet Yetkiniz Bulunmamakta.")
  let sayi = args[0]
  if (!sayi) return message.reply("Lütfen temizlencek sayı miktarını gir")
 message.channel.bulkDelete(sayi)
 message.channel.send('<:tik:1271885114812530809> Başarıyla **'+ sayi + '** Mesaj Sildim.')
}
exports.conf = {
  aliases: ['sil']
};

exports.help = {
  name: "temizle"
};
