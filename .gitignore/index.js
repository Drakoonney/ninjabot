const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connected")
});

bot.login("NDQ0ODg2MTY4MTk5MzY0NjQ5.DdicDA.L2YPYQbb92lqZVjcihuG22L7UCs");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -*help");
    }

bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();
    
    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "LES NINJA DE SÉCURITÉ");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
    }
    if(message.mentions.users.size === 0) {
        return message.reply("Merci de mentionner l'utilisateur à expulser.").catch(console.error);
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
        return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
    }
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.reply("Je n'ai pas la permission d'expulser des gens.").catch(console.error);
    }
    kickMember.kick().then(member => {
        message.reply('Le Ninja ${member.user.username} à bien été expulsé.').catch(console.error);
        message.guild.channels.find("name", "général").send('**${member.user.username}** à été expulsé du serveur par **${message.author.username}**.')
    }).catch(console.error)    
    
                               
    if (command === "ban") {
        let modRole = message.guild.roles.find("name", "LES NINJA DE SÉCURITÉ");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
        }
        const member = message.mentions.members.first();
        if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir.");
        member.ban().then(member => {
            message.reply('${member.user.username} à bien été banni.').catch(console.error);
            message.guild.channels.find("name", "général").send('**${member.user.username}** à été banni du serveur par **${message.author.username}**.')
        }).catch(console.error)
}}},)})
