const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("Rolleri Yönet Yetkiniz Bulunmamakta.")
    let user = message.mentions.users.first();
    let rol = message.mentions.roles.first();
    if(!user) return message.reply("Lütfen Rolün Verileceği Kişiyi Belirt")
    if(!rol) return message.reply("Lütfen Verilicek Rolü Belirt")
    
    message.guild.members.cache.get(user.id).roles.add(rol)
  
    message.reply("<:tik:1271885114812530809> başarıyla rolü verdim")
}
exports.conf = {
  aliases: ['rolver']
};

exports.help = {
  name: "rol-ver"
};