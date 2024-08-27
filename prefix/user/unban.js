const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("Rolleri Yönet Yetkiniz Bulunmamakta.")
  let user = args[0]
  if (!user) return message.reply("Lütfen bir kullanıcı ID gir!")
  message.reply("<:tik:1271885114812530809> verilen ıd banını kaldırdım")
  message.guild.members.unban(user);
}
exports.conf = {
  aliases: ['yasak-kaldır']
};

exports.help = {
  name: "unban"
};
