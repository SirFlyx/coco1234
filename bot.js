const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json");

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter);

client.on("ready", () => {

  console.log(`cheguei pra fuder ` + client.users.cache.size + ` usuários de drogas, em ` + client.channels.cache.size + ` canais, em ${client.guilds.cache.size} servidores pra você servidores.`);
    console.log(`Olá Mundo!`)
    client.user.setActivity(`a RedeStar para o topo!`)

});

//contador de membros

client.on('guildMemberAdd', member =>{
    

  var numbertowords = require('number-to-words');
  var membrosCount = `${client.guilds.cache.get('699276442483294269').memberCount}`;
  var membrosArray = new Array();
  var membrosSplit = membrosCount.split("");
  var contador = "";

  for(var i = 0; i<membrosCount.length;i++)
  {
      membrosArray[i] = numbertowords.toWords(membrosSplit[i]);
      contador += ':'+membrosArray+':';
  }

  const canal = client.channels.cache.get('699311941256085504');
  canal.setTopic(`Temos atualmente ${contador} membros!
📣 https://discord.gg/Bu65cc9`)
  
});

client.on('guildMemberRemove', member =>{
  

  var numbertowords = require('number-to-words');
  var membrosCount = `${client.guilds.cache.get('699276442483294269').memberCount}`;
  var membrosArray = new Array();
  var membrosSplit = membrosCount.split("");
  var contador = "";

  for(var i = 0; i<membrosCount.length;i++)
  {
      membrosArray[i] = numbertowords.toWords(membrosSplit[i]);
      contador += ':'+membrosArray+':';
  }

  const canal = client.channels.cache.get('699311941256085504');
  canal.setTopic(`Temos atualmente ${contador} membros!
📣 https://discord.gg/Bu65cc9`)
  
});

client.on("guildCreate", () => {
  db.set(guild.id, []).write()
  })

client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.toLowerCase().startsWith(config.prefix)) return;

    var comando = message.content.toLowerCase().split(" ")[0];
    comando.slice(config.prefix.length);

    var args = message.content.split(" ").slice(1);

    try {
        var arquivoComando = require(`./commands/${comando}.js`)
        arquivoComando.run(client, message, args);
    }catch (erro){
      console.log(erro);
    }

});

client.on('guildMemberAdd', member => {
  let embed = new Discord.MessageEmbed()

  .setTitle('👋 Bem-vindo(a)!')
  .setColor('BLACK')
  .setThumbnail(member.user.avatarURL)
  .setDescription(`✅ Olá ${member}, esperamos que você se divirta no RedeStar!`)
  .setFooter('Rede-Star  -  Todos os diretos reservados!')
  .setTimestamp()
  let canalenter = client.channels.cache.get('699302029872463952')
  .send(embed)

});

client.login(config.token);