const {EmbedBuilder} = require("discord.js");
exports.run = async (client, message, args) => {
  
   const random = Math.floor(Math.random() * 99) + 1
   
   message.channel.send("Hmm... Şanslı sayın `"+random+"` mi?")
  
};
exports.conf = {
  aliases: ['şanslı-sayım']
};

exports.help = {
  name: "şanslısayım"
};
