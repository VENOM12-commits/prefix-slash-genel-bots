const {EmbedBuilder} = require("discord.js");
exports.run = async (client, message, args) => {
   message.reply(`pingim **${client.ws.ping}** dir`)

};
exports.conf = {
  aliases: ['ms']
};

exports.help = {
  name: "ping"
};
