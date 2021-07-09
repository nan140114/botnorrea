const fs = require('fs');
const { Telegraf } = require('telegraf');

const { BOT_PREFIX, TELEGRAM_TOKEN } = require('../../constants');

const bot = new Telegraf(TELEGRAM_TOKEN);

const commandFiles = fs
    .readdirSync(`${__dirname}/commands`)
    .filter(file => file.endsWith('.js'));

commandFiles.forEach(commandFile => {
    const commandScript = require(`./commands/${commandFile}`);
    const command = `${BOT_PREFIX}${commandScript.name}`;
    const firstIndex = 0;
    const execute = context => {
        try {
            const { message } = context;
            const args = message.text
                .trim()
                .split(' ')
                .filter((_, index) => index > firstIndex);

            commandScript.execute(context, args);
        } catch (error) {
            console.log(error.message);
        }
    };
    bot.command(command, execute);
});

const init = async () => {
    try {
        await bot.launch();
        console.log('telegraf js: @botnorrea_bot was launched!');
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
