const Discord = require("discord.js");

exports.run = async (client, message, args) => {


  const random = Math.floor(Math.random() * 99) + 1
  
  message.channel.send(`yarr yani sikinizin boyu tam **${random}cm** oha`)




}

  exports.conf = {
  aliases: ['ölç', 'kaç-cm', 'biton-boyut', 'yarramın-boyutu']
};

exports.help = {
  name: "kaçcm"
};