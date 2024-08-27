const { Client, GatewayIntentBits, Partials } = require("discord.js");
const chalk = require("chalk");
const fs = require("fs");

const config = require("./config.js");

const client = new Client({
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.User,
    Partials.ThreadMember,
  ],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", async message => {
    const db = require("croxydb");
  
    if (await db.get(`afk_${message.author.id}`)) {
     
      db.delete(`afk_${message.author.id}`);
  
      message.channel.send("Artık afk degilsin");
    }
  
    var kullanıcı = message.mentions.users.first();
    if (!kullanıcı) return;
    var sebep = await db.get(`afk_${kullanıcı.id}`);
  
    if (sebep) {
      message.reply("adam afk");
    }
  });

  client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`) 
          if (i == 'acik') {
              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                   
                    let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
                    .setFooter('$adis BOT  -|-  Reklam engellendi.', client.user.avatarURL)
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                    .setDescription("$adis BOT Reklam sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda reklam yakaladım.")
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    msg.guild.owner.user.send(embed)                       
                    return msg.channel.send(`${msg.author.tag}, Reklam Yapmak Yasak Lanet Zenci!`).then(msg => msg.delete(25000));
                  }             
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
  });
  
  client.on('messageCreate', msg => {
    const content = msg.content.toLowerCase(); 

    const replies = {
        'sa': 'as canomm',
        'naber': 'iyi senden naber 😃',
        'sea': 'dea neeee',
        'selam': 'sanada selam nabersss',
        'selamun aleyküm': 'as',
        'selamunaleyküm': 'aleykum selam',
        'selamunaleykum': 'aleykumselam',
        'günaydın': 'günayrıdnlarrrrrrrr canommm',
        'merantion': 'efm'
    };
		if (replies[content]) {
			msg.reply(replies[content]);
		}
	});

  client.on('guildMemberAdd', async member => {
  
    let otorol = db.fetch(`otorol_${member.guild.id}`)
    if(!otorol) return;
    
    client.channels.cache.get(otorol.kanal).send(":mega: **"+member.user.tag+"** Kullanıcı Katıldı! Gerekli Rolleri Verdim. <:blurple_check:948646981260148747>")
    member.roles.add(otorol.rol).catch(() => {})
    
  });

  client.on('guildMemberAdd', async member => {
    let sayac = db.fetch(`sayac_${member.guild.id}`)
    let kalan = sayac.sayi - member.guild.memberCount || '?'
    if(!kalan) return;
    if(!sayac) return;
    
    client.channels.cache.get(sayac.kanal).send(":mega: Hoşgeldin **"+member.user.username+"** Seninle Beraber `"+member.guild.memberCount+"` Kişi Olduk, `"+sayac.sayi+"` Kişi Olmamıza Son `"+kalan+"` Kişi Kaldı! <:blurple_check:948646981260148747>")
    
  });
  client.on('guildMemberRemove', async member => {
    
    let sayac = db.fetch(`sayac_${member.guild.id}`)
    let kalan = sayac.sayi - member.guild.memberCount
    if(!sayac) return;
    
    client.channels.cache.get(sayac.kanal).send(":mega: Görüşürüz **"+member.user.username+"** Senin Yüzünden `"+member.guild.memberCount+"` Kişi Olduk! <:blurple_cross:948649220355801108>")
    
  });
  

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
    let message = await interaction.channel.messages.fetch(interaction.message.id)
    if(interaction.customId == "evet") {
  const db = require("croxydb")
  db.push(`evet_${interaction.message.id}`, interaction.user.id)
  interaction.reply({content: "Başarıyla Oyunu **Evet** Olarak Verdin!", ephemeral: true})
  
  const evet = db.get(`evet_${interaction.message.id}`).length;
  const hayir = db.get(`hayir_${interaction.message.id}`).length;
  const aciklama = db.get(`oylama_${interaction.message.id}`)
  const embed = new EmbedBuilder()
  .setTitle("Oylama Zamanı")
  .setDescription(`Oylama: **${aciklama}**\n\nEvet: **${evet}**\n\nHayır: **${hayir}**`)
  .setColor("#ff0000")
  await message.edit({embeds: [embed]})
    }
  });
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
    let message = await interaction.channel.messages.fetch(interaction.message.id)
    if(interaction.customId == "hayır") {
  const db = require("croxydb")
  db.push(`hayir_${interaction.message.id}`, interaction.user.id)
  interaction.reply({content: "Başarıyla Oyunu **Hayır** Olarak Verdin!", ephemeral: true})
  
  const evet = db.get(`evet_${interaction.message.id}`).length;
  const hayir = db.get(`hayir_${interaction.message.id}`).length;
  const aciklama = db.get(`oylama_${interaction.message.id}`)
  const embed = new EmbedBuilder()
  .setTitle("Oylama Zamanı")
  .setDescription(`Oylama: **${aciklama}**\n\nEvet: **${evet}**\n\nHayır: **${hayir}**`)
  .setColor("#ff0000")
  await message.edit({embeds: [embed]})
    }
  });

module.exports = client;

// Event Handler // 

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
  require("./events/"+file);
  console.log(chalk.blue`${file} Event yüklendi`)
}


client.login(config.token).catch(e => {
console.log(`✕ | token hatalı venom ya da internet sıkıntı var`)
})

console.log("destek için gg/rxmlo!")
console.log(`${client.user} artık aktif!`)