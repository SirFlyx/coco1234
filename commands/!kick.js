const Discord = require ("discord.js");
const client = new Discord.Client(); 

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("⚠️ ERRO: Você não possui permissão para kickar!");
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!membro) return message.channel.send("⚠️ ERRO: Mencione a pessoa que você deseja kickar!");

    if(membro == message.member) return message.channel.send("⚠️ ERRO: Você não pode se kickar!");
    const motivo = args.slice(1).join(" ");
    if (!motivo) return message.channel.send("⚠️ ERRO: Digite um motivo!");

    const embed = new Discord.MessageEmbed()

    .setAuthor(`${message.author.tag}`, `https://images-ext-2.discordapp.net/external/NViWapaL6XRIFDfCs1OnaAwzEEIEz433Ms93rDma0Sc/https/cdn.discordapp.com/avatars/697880845708558347/46a0fe6555d5a1dc67123329a5ed15e2.webp`)
    .setTitle("MARTELO DO KICK")
    .setDescription(`Você deseja mesmo kickar ${membro}?\nPelo Motivo: ${motivo}`)
  const msg = await message.channel.send(embed).then(msg => {
        msg.react("✅");
        msg.react("❌");

              const CocoFilter = (reaction, user, ) => reaction.emoji.name === '✅' && user.id === message.author.id;
              // coletores de cada reação, para ver confirmar tal membro  
              
                      const Coco = msg.createReactionCollector(CocoFilter);

               const AbaFilter = (reaction, user, ) => reaction.emoji.name === '❌' && user.id === message.author.id;
              // coletores de cada reação, para ver confirmar tal membro  
              
                      const Aba = msg.createReactionCollector(AbaFilter);


        Coco.on("collect", em => {
            em.remove(message.author.id);
            membro.kick();
            const canal = message.guild.channels.cache.get("700093527811555378");

            const embed = new Discord.MessageEmbed()

            .setTitle("MARTELO DO KICK")
            .setDescription(`${membro} foi kickado por ${message.author}\nPelo Motivo: ${motivo}`)
            canal.send(embed)
            
        Aba.on("collect", em => {
            em.remove(message.author.id);

            const embed = new Discord.MessageEmbed()

            .setTitle("MARTELO DO KICK")
            .setDescription(`${membro} não foi kickado por ${message.author}\nPelo Motivo: ${motivo}`)
            msg.edit(embed)
            });
        });
    });
}