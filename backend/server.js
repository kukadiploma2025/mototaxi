const express = require('express');
const { Telegraf } = require('telegraf');

const BOT_TOKEN = '8052888670:AAGFPEHYmgqWcoWIU3d6fM-ZNykoac8n-p8';
const bot = new Telegraf(BOT_TOKEN);
const app = express();

app.use(express.json());

bot.start((ctx) => {
    ctx.reply('Привет! Нажмите кнопку, чтобы вызвать мото-такси.', {
        reply_markup: {
            keyboard: [[{ text: "🚖 Вызвать такси", web_app: { url: "https://yourapp.com" } }]],
            resize_keyboard: true
        }
    });
});

bot.on('message', (ctx) => {
    ctx.reply('Напишите /start, чтобы вызвать такси.');
});

bot.launch();
app.listen(3000, () => console.log('Сервер запущен на порту 3000'));
