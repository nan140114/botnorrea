const fs = require('fs');
const Discord = require('discord.js');

const { BOT_PREFIX, DISCORD_TOKEN } = require('../../constants');
const [
    D_TOKEN_0,
    D_TOKEN_1,
    D_TOKEN_2
] = DISCORD_TOKEN;

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
    .readdirSync(`${__dirname}/commands`)
    .filter(file => file.endsWith('.js'));

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`);
    client.commands.set(command.name, command);
});

client.on('ready', () => {
    console.log(`discord.js: Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    const isInvalidCommand = message.author.bot ||
        !message.content.startsWith(BOT_PREFIX);
    if (isInvalidCommand) return;

    const args = message.content
        .slice(BOT_PREFIX.length)
        .trim()
        .split(' ');
    const command = args
        .shift()
        .toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

const init = async () => {
    try {
        await client.login(`${D_TOKEN_0}.${D_TOKEN_1}.${D_TOKEN_2}`);
    } catch (error) {
        console.log(`discord.js error: ${error.message}`);
    }
};

// Enable graceful stop
const gracefulStop = () => {
    console.log('discord.js client destroy');
    client.destroy();
};

module.exports = {
    gracefulStop,
    init
};
