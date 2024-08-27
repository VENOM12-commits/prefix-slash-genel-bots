const Discord = require("discord.js")
const db = require("croxydb")


module.exports.run = async (client, message, args) => {

  
    if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`**Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);


let reklam = db.fetch(`reklamengel_${message.guild.id}`);
   const embed = new Discord.EmbedBuilder()
   .setColor("#ff0000")
   .setDescription("<:tik:1271885114812530809> **Reklam Engel Sistem Aktif Edildi** \n Artık Bot Atılan Linkleri Sansürlicek.")
   const embed2 = new Discord.EmbedBuilder()
   .setColor("#ff0000")
   .setDescription("<:tik:1271885114812530809> **Reklam Engel Sistemi Kapatıldı** \n Artık Bot Atılan Linkleri Sansürlemicek.")
if (reklam)  {

    db.delete(`reklamengel_${message.guild.id}`);
    message.channel.send({embeds: [embed2], allowedMentions: { repliedUser: false }})

    return
}

if (!reklam)  {

    db.set(`reklamengel_${message.guild.id}`, true);
    message.channel.send({embeds: [embed], allowedMentions: { repliedUser: false }})

    return
}



},
  
  exports.conf = {
   
    aliases: ['reklam', 'reklam-engel']
    
  }
  
exports.help = {
name: "reklamengel",
description: "Reklam Engel Sistemini Açarsın/Kapatırsın.",
kategori: "mod",
usage: "",
}