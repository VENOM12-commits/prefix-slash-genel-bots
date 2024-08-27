const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
exports.run = async (client, message, args) => {
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("YARDIM KATGORİLERİ")
  .setDescription(`**<a:ayarlar:1271890285487722679> m+yardım ayarlamalı |** Ayarlamalı yetkili komutlarını gösterir.\n\n<a:PandaRun:1271886680483172414> **m+yardım eğlence |** Eğlence Komutlarını Gösterir.\n\n<:43565member:1271885689511739415> **m+yardım kullanıcı |** Kullanıcı Komutlarını Gösterir.\n\n<:admingreen:1271884761115398166> **m+yardım yetkili |** Yetkili Komutlarını Gösterir.\n\n<:bot:1271890553310810245> **m+yardım bot |** Bot Komutlarını Gösterir\n\n<:koruMa:1274340588472238127> **m+yardım koruma |** koruma komutlarını gösterir\n\n\n<:Link_List:1272271353969508585> **Destek Ve Bağlantılar**\n[beni Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=1273689565521117286)\n[Destek Sunucum](https://discord.gg/wnerscode)\n[bana Oy Ver](https://top.gg/bot/1260272303737016486?s=02bb244fc592e)`)
  if(!args[0]) return message.channel.send({embeds: [embed]})
if(value === "bot") {
const embed = new diskord.EmbedBuilder()
.setTitle("<:bot:1271890553310810245> Ana Komutlar")
.setDescription("**m+istatistik |** Botun istatistiklerini gösterir\n**m+linkler |** Botla Alakalı Linkleri Alırsınız\n**m+ping |** botun ping gösterir")
message.channel.send({embeds: [embed]})
}
if(value === "yetkili") {
const embed = new diskord.EmbedBuilder()
.setTitle("<:admingreen:1271884761115398166> Yetkili Komutları")
.setDescription("**m+ban | ** Etiketlediğiniz kişiyi sunucudan yasaklar\n**m+ban-list |** Sunucundan Banlanan üyeleri gösterir\n**m+forceban |** ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar\n**m+kanal-açıklama |** Bulunduğunuz kanalın konusunu/açıklamasını değiştirir\n**m+kick |** İstediğiniz kişiyi sunucudan atar\n**m+rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır\n**m+rol-oluştur** | Yazılan Adda Rol Oluşturulur\n**m+rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir\n**m+sesli-çek |** Etiketlediğiniz kullanıcıyı yanınıza çeker\n**m+sil |** Belirtilen miktar mesajı siler\n**m+unban |** Belirtilen kişinin banını kaldırır\n**m+yavaşmod** | Kanalda yavaşmod'u ayarlarsınız")
message.channel.send({embeds: [embed]})
}
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:PandaRun:1271886680483172414> Eğlence Komutlar")
.setDescription("**m+alkış |** Bot Alkışlar\n**m+aşkölçer |** Bot etiketlediğiniz kişiye karşı olan aşkını ölçer\n**m+emojiyazı |** Bot mesajınızı emoji haline getirir\n**m+hackle |** Etiketlediğiniz kişiyi hackler\n**m+kaçcm |** piton uzunluğunu söyler**\nm+sarıl |** Etiketlediğiniz kişiye sarılırsınız\n**m+slot |** Slots oyununu oynar")
message.channel.send({embeds: [embed]})
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle("<:43565member:1271885689511739415> Kullanıcı Komutları")
.setDescription("**m+afk |** AFK olunca seni etiketleyen kişiye sebebini yazar\n**m+atatürk |** Rastgele bir Atatürk fotoğrafı gönderir\n**m+emojiler |** Sunucuda bulunan emojileri gösterir\n**m+hesapla |** Belirtilen işlemi yapar\n**m+kurucu-kim |** Sunucunun kurucusunu söyler\n**m+not-al |** Bot not alır\n**m+notum |** Notunuzu gösterir\n**</sunucu-bilgi> |** Bulunduğun sunucu hakkında bilgi verir")
message.channel.send({embeds: [embed]})
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:ayarlar:1271890285487722679> Ayarlamalı Komutları")
.setDescription("**m+küfürengel |** Küfür engelleme sistemini ayarlamanızı sağlar\n**m+oto-cevap |** Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır\n**m+otorol |** Sunucuya girenlere verilecek olan otorolü ayarlar\n**m+ototag |** Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar\n**m+sa-as |** oto sa-as ı ayarlarsınız\n**m+sayaç |** sayacı ayarlarsınız")
message.channel.send({embeds: [embed]})
}
if(value === "koruma") {
  const embed = new diskord.EmbedBuilder()
  .setTitle("<:koruMa:1274340588472238127> koruma Komutları")
  .setDescription("**/capslock-koruma |** büyük harf koruma sistemini açarsın\n**/görsel-engel |** görsel engel sadece belirli kanal atmanıza izin verir\n**/görsel-engel-kapat |** görsel engel kapatırsınız\n**/reklam-engel |** sunucunuzda sadece yönetici harici link,bağlantı tamanıza izin verir\n**/küfür-engel |** kimsenin küfür etmesini engeler")
  message.channel.send({embeds: [embed]})
  }
}
exports.conf = {
  aliases: ['yardımm', 'help']
}

exports.help = {
  name: "yardım"
}