const { EmbedBuilder, Colors } = require("discord.js");

module.exports = {
  name: "yardım",
  description: "merantion yardım menusu",
  options: [],
  run: async (client, interaction) => {
    
    const embed = new EmbedBuilder()
    .setDescription("m+yardım yaz!")
    .setColor(Colors.Blue)
    .setTimestamp()
    
    return interaction.reply({ embeds: [embed]}).catch(err => {})
  },
};