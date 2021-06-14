const fs = require('fs');
const { Telegraf } = require('telegraf');

const { BOT_PREFIX, TELEGRAM_TOKEN } = require('../../constants');

const bot = new Telegraf(TELEGRAM_TOKEN);

const commandFiles = fs
    .readdirSync(`${__dirname}/commands`)
    .filter(file => file.endsWith('.js'));

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`);
    bot.command(`${BOT_PREFIX}${command.name}`, command.execute);
});

const init = async () => {
    try {
        await bot.launch();
        console.log('@botnorrea_bot was launched!');
    } catch (error) {
        console.log(`telegraf error: ${error.message}`);
    }
};


// Enable graceful stop
const gracefulStop = () => {
    console.log('telegraf client destroy');
    bot.stop();
};

module.exports = {
    gracefulStop,
    init
};
