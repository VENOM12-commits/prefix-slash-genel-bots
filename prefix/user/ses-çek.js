const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator))
    return message.channel.send("Gerekli Yetkin Yok ki")

  if (!message.member.voice.channel)
    return message.reply("ses kanalında degilsin");
  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı)
    return message.reply(
      "birini etiketle"
    );
  if (!kullanıcı.voice.channel)
    return message.reply("etiketledigin kisi bir ses kanalinda degil");

  kullanıcı.voice.setChannel(message.member.voice.channelId)
  message.channel.send("<:tik:1271885114812530809> kullanıcıyı ses çektim");
};

exports.conf = {
  aliases: ['sesçek']
};

exports.help = {
  name: "ses-çek"
};