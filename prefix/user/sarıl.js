const {EmbedBuilder} = require("discord.js");
exports.run = async (client, message, args) => {
  
    const user = message.mentions.users.first()
    if(!user) return message.channel.send("**Sarılmak istediğin kişiyi etiketlemelisin**")
  
   message.channel.send({
     embeds: [
       new EmbedBuilder()
       .setColor("#36393F")
       .setDescription(`<@${user.id}> **adlı kişiye sarıldın**`)
       .setImage("https://images-ext-2.discordapp.net/external/bqiGJpt3e44HlYBFX5fkjqPYzYTYzbBC_LMG_PuOaxY/https/media.giphy.com/media/KL7xA3fLx7bna/giphy.gif")
     ]
   })

};
exports.conf = {
  aliases: ['sarıla-teklif-et']
};

exports.help = {
  name: "sarıl"
};
