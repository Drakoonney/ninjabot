const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connected")
});

bot.login("NDQ0ODE4Njk3NjUyMDExMDEw.DdhdNg.prRVGQZJXXS-o-hSIriWDukYaBE");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes:/n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Salut toi! x)");
        console.log("Commande Salut effectuée");
    }
});
