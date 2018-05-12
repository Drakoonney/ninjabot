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
        message.channel.sendMessage("Liste des commandes:
                                    -*help");
    }

    if (message.content === "Salut"){
        message.reply("Salut toi! x)");
        console.log("Commande Salut effectuée");
    }
});
