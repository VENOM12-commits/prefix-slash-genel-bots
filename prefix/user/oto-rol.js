
const ms = require('ms');
const db = require('croxydb');
const Discord = require('discord.js');


module.exports.run = async(client, message, args, tools) => {
  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  let rol = message.mentions.roles.first()
  let kanal = message.mentions.channels.first()
  if(!kanal) return message.reply({content: "Bir Rol Etiketlemeli veya Rolün Adını yazmalısın. Örnek `m+otorol #kanal @rol`", allowedMentions: { repliedUser: false }})
  if(!rol) return message.reply({content: "Bir Rol Etiketlemeli veya Rolün Adını yazmalısın. Örnek `m+otorol #kanal @rol`", allowedMentions: { repliedUser: false }})
  const embed = new Discord.EmbedBuilder()
  .setAuthor({name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true})})
   .setColor("Red")
  .setDescription(`otorol kanalı ${kanal} olarak otorol rolünü ${rol} olarak ayarladım`)
  .setFooter({ text: client.user.username+' Otorol Sistemi', iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setTimestamp();
  message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})

  db.set(`otorol_${message.guild.id}`, {rol: rol.id , kanal: kanal.id })
  
};


exports.conf = {
  aliases: ["rol","otorol", "oto-rol"],
  permLevel: 0,
};
exports.help = {
  name: 'otorol',
   description: 'Susturma',
  usage: 'timeout <@kullanıcı> <süre>'
};