const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connected")
});

bot.login("or9TX6-mVQhqHaQRJJRAwj1ofA2wSBJa");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -*help");
    }

bot.on('message', message => {
    if (message.content === prefix + "Ninja"){
        message.channel.sendMessage("Woosh!");
    }

    
    if (message.content === "Salut"){
        message.reply("Salut toi! x)");
        console.log("Commande Salut effectuée");
    }
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "general").send('Bienvenue sur le Serveur des Ninjas Imprévisibles ${member}')
})
    
bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "general").send('${member} nous a quitté... Repose en paix ${member}')
})
    
bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'LES NINJA');
    member.addRole(role)
})
    
    if(message.content === prefix + "infodiscord") {
              var embed = new Discord.RichEmbed()
              .setDescription("Information du Discord")
              .addField("Nom du Discord", message.guild.name)
              .addField("Créé le", message.guild.createdAt)
              .addField("Tu as rejoins le", message.member.joinedAt)
              .addField("Utilisateurs sur le discord", message.guild.memberCount)
              .addColor("0x0000FF")
    message.channel.sendEmbed(embed)
              
}
       
    if (message.content.startsWith(prefix + "Sondage")) {
       if(message.author.id == "443121310017781761") 
           let args = message.content.split(" ").slice(1);
           let thingToEcho = args.join("")
           var embed = new Discord.RichEmbed()
              .setDescription("Sondage")
              .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
              .setColor("OxB40404")
              .setTimestamp()
           message.guild.channels.find("name", "sondage").sendEmbed(embed)
           .then(function (message) {
               message.react(":white_check_mark")
               message.react(":x:")
           }).catch(function() {
           });
           }else{
               return message.reply("Tu n'as pas la permission.")
})})
