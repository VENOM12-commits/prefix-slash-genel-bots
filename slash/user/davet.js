const { Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require("discord.js");

module.exports = {
  name: "davet",
  description: "Botun davet linkini atar.",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const dvt = new ButtonBuilder()
      .setLabel('Davet Linkim')
      .setStyle('Link')
      .setEmoji('🤖')
      .setURL("https://discord.com/oauth2/authorize?client_id=1260272303737016486&permissions=8&integration_type=0&scope=bot");

    const destek = new ButtonBuilder()
      .setLabel('Destek Sunucum')
      .setStyle('Link')
      .setEmoji('🌎')
      .setURL("https://discord.gg/wnerscode");

    const row = new ActionRowBuilder().addComponents(dvt, destek);

    const embed = new EmbedBuilder()
      .setAuthor({ name: `Merhaba, Ben MERANTİON`, iconURL: interaction.client.user.displayAvatarURL({ dynamic: true })})
      .setTitle(`merantion'yu Davet Et!`)
      .setDescription(`🤖 | Botu çağırdığın için teşekkür ederim 😇`)
      .setColor('#2F3136')
      .setTimestamp()
      .setFooter({ text: `${interaction.user.tag} İstedi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) });

    interaction.reply({ embeds: [embed], components: [row] });
  }  
};