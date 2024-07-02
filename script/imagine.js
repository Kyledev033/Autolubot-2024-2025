const axios = require('axios');

module.exports.config = {
    name: "imagine",
    version: "1.0.0",
    credits: "Samir Œ",
    description: "Anime image generator",
    hasPrefix: false,
    cooldown: 5,
    aliases: ["imagin"]
};

module.exports.run = async function ({ api, event, args }) {
    try {
        let prompt = args.join(" ");
        if (!prompt) return api.sendMessage("Missing prompt for anime image generator", event.threadID, event.messageID);

        api.sendMessage("Generating your image ...", event.threadID, async (err, info) => {
            try {
                const apiUrl = `https://samirxpikachu.onrender.com/mageDef?prompt=${encodeURIComponent(prompt)}`;
                const response = await axios.get(apiUrl, { responseType: 'stream' });

                if (!response.data) {
                    return api.sendMessage("Failed to retrieve image.", event.threadID, event.messageID);
                }

                return api.sendMessage({
                    body: '🖼 | 𝗛𝗲𝗿𝗲'𝘀 𝗬𝗼𝘂𝗿 𝗜𝗺𝗮𝗴𝗲 𝗯𝗿𝗼',
                    attachment: response.data
                }, event.threadID);
            } catch (error) {
                console.error(error);
                api.sendMessage("An error occurred while generating your image.", event.threadID);
            }
        });
    } catch (s) {
        api.sendMessage(s.message, event.threadID);
    }
};
