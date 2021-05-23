const fs = require('fs');
const { DISCORD_PREFIX, DISCORD_TOKEN } = require('../../constants');

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
    .readdirSync('./commands')
    .filter(file => file.endsWith('.js'));

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`);
    client.commands.set(command.name, command);
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    const isInvalidCommand = message.author.bot ||
        !message.content.startsWith(DISCORD_PREFIX);
    if (isInvalidCommand) return;

    const args = message.content
        .slice(DISCORD_PREFIX.length)
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

const init = () => client.login(DISCORD_TOKEN);

module.exports = { init };
