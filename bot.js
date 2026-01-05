require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// توکن بات تلگرام خود را در فایل .env قرار داده‌اید
const token = '8523483933:AAGr_CQFKPhzHlxHgMS8bU4tTpvjZksCdG8';
const bot = new TelegramBot(token, { polling: true });

// واکنش به دستور /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
 bot.sendMessage(chatId, 
`Welcome to TRXZAP ⚡️

Buy and rent TRON Energy & Bandwidth instantly with the best rates.
Fast delivery, secure transactions, and full automation.

No staking, no freezing TRX — just pay and receive energy in seconds.`,
{
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Buy Energy",
          web_app: { url: `https://trxzap.com?chatId=${chatId}` }
        }
      ]
    ]
  }
});
});

// دریافت داده از وب اپلیکیشن (اختیاری)
bot.on('web_app_data', (msg) => {
  const chatId = msg.chat.id;
  const data = msg.web_app_data.data;
  bot.sendMessage(chatId, `recived: ${data}`);
});
