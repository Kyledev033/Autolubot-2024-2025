const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Kyle敦. ဗီူ',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`[🤖]—𝗔𝘂𝘁𝗼𝗟𝘂𝗯𝗼𝘁𝘃𝟯\n    （„• ֊ •„)♡\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n How can I help you today? `, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(``, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://hercai.onrender.com/v3/hercai`);
    const response = data.response;
    api.sendMessage('[🤖]—𝗔𝘂𝘁𝗼𝗟𝘂𝗯𝗼𝘁𝘃𝟯\n    （„• ֊ •„)♡\n▬▬▬▬▬▬▬▬▬▬▬▬\n['+ response +']\n▬▬▬▬▬▬▬▬▬▬▬▬\n[📚]|𝗚𝗣𝗧-𝟰 ', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
