const ytdl = require('ytdl-core')
const pesquisa = require('yt-search')
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if (!message.client.voiceChannel) return message.channel.send('⚠️ ERRO: Entre em um canal de voz!')
    if (message.guild.me.voiceChannel) return message.channel.send('⚠️ ERRO: Já estou em um canal de voz!')

    let pes = args.join(" ");
    if (!pes) return message.channel.send('⚠️ ERRO: Insira o nome ou url do video desejado!')

    pesquisa(pes, async (erro, re) => {
        if (erro) console.log(erro);

        const videos = re.videos;
        const pVideo = video[0];

    });
};