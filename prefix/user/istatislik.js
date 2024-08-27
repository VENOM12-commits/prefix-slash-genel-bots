const {EmbedBuilder} = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
exports.run = async (client, message, args) => {
  const Uptime = moment
  .duration(client.uptime)
  .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .addFields({ name: '• Bot Sahibi', value: `<@1061647578271318026>`, inline: false})
    .addFields({ name: '• Bellek Kullanımı', value: `${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}MB`, inline: true})
    .addFields({ name: '• Çalışma Süresi', value: `${Uptime}`, inline: true})
    .addFields({ name: '• Kullanıcılar', value: `${client.users.cache.size}`, inline: false})
    .addFields({ name: '• Sunucular', value: `${client.guilds.cache.size}`, inline: false})
    .addFields({ name: '• Kanallar', value: `${client.channels.cache.size}`, inline: false})
    .addFields({ name: '• İşletim Sistemi', value: `Windows 64 Bit`, inline: false})
    .addFields({ name: '• İşlemci', value: `${os.cpus().map(i => `${i.model}`)[0]}`, inline: false})
    .addFields({ name: '• Discord.JS sürüm', value: `14.2.0`, inline: true})
    .addFields({ name: '• Node.JS sürüm', value: `v16.14.2`, inline: true})
    .addFields({ name: '• Bot Kuruluş', value: `9 Tem 2024`, inline: true})
    .addFields({ name: '• Komut Sayısı', value: `70`, inline: true})
    .addFields({ name: '• Ping', value: `${client.ws.ping}`, inline: true})
    .addFields({ name: '• destek', value: `[tıkla](https://discord.gg/wnerscode)`, inline: true})
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ['bot-bilgi', 'botbilgi', 'merantion-bilgi', 'istatislik']
};

exports.help = {
  name: "istatistik"
};
