const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.channel.send("Üyeleri Banla Yetkiniz Yok.")
let kullanıcı = args[0]
if (!kullanıcı) return message.reply("Lütfen bir kullanıcı ID gir!")
message.guild.members.ban(kullanıcı)
message.reply(kullanıcı + "banlandı! <:tik:1271885114812530809>")


}

  exports.conf = {
  aliases: ['ıd-ban', 'ıd-banla']
};

exports.help = {
  name: "forceban"
};