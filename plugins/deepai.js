/* Codded by @phaticusthiccy
re edited by afnanplk
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // Resp Checker
const Config = require('../config'); // GAN STYLE Support

const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // Localde ise deepmain.js oluşturarak özelleştirilebilir şekilde kullanabilirsiniz. Web Sunucularında Çalışmaz!!
deepai.setApiKey('8d39bbf7-e8f0-4167-9215-e763766e0d29'); // Quickstart API Key

const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support

if (Config.WORKTYPE == 'private') {
    Asena.addCommand({pattern: 'deepai$', fromMe: true, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
        await message.sendMessage('💻 Kullanımı: *.moodai <yazı>*\nℹ️ Açıklama: 🇹🇷 Yazdığınız yazıdan ruh halinizi bulur.\n🇬🇧 It finds your mood from the article you wrote.\n\n💻 Kullanımı: *.colorai*\nℹ️ Açıklama: 🇹🇷 Siyah beyaz fotoğrafları renklendirir.\n🇬🇧 It colorize bw photos.\n\n💻 Kullanımı: *.faceai*\nℹ️ Açıklama: 🇹🇷 Yapay zeka ile daha önce hiç var olmamış insan yüzleri üretir.\n🇬🇧 Generates human faces with artificial intelligence, that never existed before.\n\n💻 Kullanımı: *.animai*\nℹ️ Açıklama: 🇹🇷 Yapay zeka ile daha önce hiç var olmayan anime yüzleri üretir.\n🇬🇧 Generates anime faces with artificial intelligence, that never existed before.\n\n💻 Kullanımı: *.superai*\nℹ️ Açıklama: 🇹🇷 Fotoğrafın kalitesini yapay zeka ile arttırır.\n🇬🇧 Improves the quality of photos with Neural AI.\n\n💻 Kullanımı: *.waifuai*\nℹ️ Açıklama: 🇹🇷 Fotoğrafların renk paletlerini yapay zeka ile birleştirir.\n🇬🇧 Combines the color palettes of photos with artificial intelligence.\n\n💻 Kullanımı: *.dreamai*\nℹ️ Açıklama: 🇹🇷 Fotoğrafa yıldızlı gece efekti uygular.\n🇬🇧 Applies deepdream effect to the photo.\n\n💻 Kullanımı: *.neuraltalkai*\nℹ️ Açıklama: 🇹🇷 Fotoğraftaki olan şeyi yapay zeka ile açıklar.\n🇬🇧 Explain the phenomenon in the photo with artificial intelligence.\n\n💻 Kullanımı: *.ttiai <yazı>*\nℹ️ Açıklama: 🇹🇷 Yazıyı resme dönüştürür.\n🇬🇧 Converts text to a picture. (Text-to-Image)\n\n💻 Kullanımı: *.toonai*\nℹ️ Açıklama: 🇹🇷 Fotoğraftaki yüzü çizgi film karakterine çevirir.\n🇬🇧 Turns the face in the photo into a cartoon character.\n\n💻 Kullanımı: *.textai <yazı>*\nℹ️ Açıklama: 🇹🇷 Yazdığınız cümleden size yapay bir hikaye yaratır.\n🇬🇧 It creates an artificial story for you from your sentence.\n\n💻 Kullanımı: *.nudityai*\nℹ️ Desc: 🇹🇷 Fotoğraftaki NSFW değerini 1 ve 0 arasında gösterir. \n🇬🇧 It shows the NSFW value between 1 and 0 in the photo.\n\n💻 Kullanımı: *.ganstyle*\nℹ️ Açıklama: 🇹🇷 Yanıtladığınız fotoğrafı seçili olan resim ile birleştirir.\n🇬🇧 Combines the photo you answered with the selected picture.\n\n⚠️ 🇹🇷 *Bütün bu yapay zeka araçları derin öğrenme ile çalışır. Ne kadar fazla kullanırsanız o kadar fazla bilgiyi depolar.* ```Sadece ingilizce karakter kullanın!```\n\n⚠️ 🇬🇧 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');
    }));
    Asena.addCommand({pattern: 'faceai$', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var webimage = await axios.get('https://shot.screenshotapi.net/screenshot?token=4MY3B09-CQHMW6T-PRT830T-Y3HXK40&url=https%3A%2F%2Fthispersondoesnotexist.com%2F&width=1000&height=1000&output=image&file_type=jpeg&wait_for_event=load', { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
    Asena.addCommand({pattern: 'animai', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var min = 10000; 
        var max = 50000;  
        var asenasrandomgen = Math.floor(Math.random() * (+max - +min) + +min); 
        var IMGWADATA = await axios.get('https://shot.screenshotapi.net/screenshot?token=4MY3B09-CQHMW6T-PRT830T-Y3HXK40&url=https://www.thiswaifudoesnotexist.net/example-' + asenasrandomgen + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })
        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            { mimetype: Mimetype.jpg, caption: Config.AFN}
        )
    }));
    Asena.addCommand({pattern: 'colorai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.COLORIZING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'waifuai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.MIXING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {thumbnail: base64str, mimetype: Mimetype.jpg, caption: Config.AFN})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'superai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.IMPROVED,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'moodai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,
        });
        await message.reply(`*Mood:* ${resp.output}`);
    }));
    Asena.addCommand({pattern: 'dreamai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.DREAMAI,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'neuraltalkai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.NEURALTALKAI,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.reply(`*Output:* ${resp.output}`);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'ttiai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
    Asena.addCommand({pattern: 'toonai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.TOONAI,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'nudityai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.client.sendMessage(message.jid, `*Oran:* ${resp.output.nsfw_score}`, MessageType.text, { quoted: message.data });
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'textai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,
        });
        await message.client.sendMessage(message.jid, `*Hikaye:*\n ${resp.output}`, MessageType.text, { quoted: message.data });
    }));
    Asena.addCommand({pattern: 'ganstyle$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.GANSTYLE,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("fast-style-transfer", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'deepai$', fromMe: true, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
        await message.sendMessage('💻 Kullanımı: *.moodai <yazı>*\nℹ️ Açıklama: 🇹🇷 Yazdığınız yazıdan ruh halinizi bulur.\n🇬🇧 It finds your mood from the article you wrote.\n\n💻 Kullanımı: *.colorai*\nℹ️ Açıklama: 🇹🇷 Siyah beyaz fotoğrafları renklendirir.\n🇬🇧 It colorize bw photos.\n\n💻 Kullanımı: *.faceai*\nℹ️ Açıklama: 🇹🇷 Yapay zeka ile daha önce hiç var olmamış insan yüzleri üretir.\n🇬🇧 Generates human faces with artificial intelligence, that never existed before.\n\n💻 Kullanımı: *.animai*\nℹ️ Açıklama: 🇹🇷 Yapay zeka ile daha önce hiç var olmayan anime yüzleri üretir.\n🇬🇧 Generates anime faces with artificial intelligence, that never existed before.\n\n💻 Kullanımı: *.superai*\nℹ️ Açıklama: 🇹🇷 Fotoğrafın kalitesini yapay zeka ile arttırır.\n🇬🇧 Improves the quality of photos with Neural AI.\n\n💻 Kullanımı: *.waifuai*\nℹ️ Açıklama: 🇹🇷 Fotoğrafların renk paletlerini yapay zeka ile birleştirir.\n🇬🇧 Combines the color palettes of photos with artificial intelligence.\n\n💻 Kullanımı: *.dreamai*\nℹ️ Açıklama: 🇹🇷 Fotoğrafa yıldızlı gece efekti uygular.\n🇬🇧 Applies deepdream effect to the photo.\n\n💻 Kullanımı: *.neuraltalkai*\nℹ️ Açıklama: 🇹🇷 Fotoğraftaki olan şeyi yapay zeka ile açıklar.\n🇬🇧 Explain the phenomenon in the photo with artificial intelligence.\n\n💻 Kullanımı: *.ttiai <yazı>*\nℹ️ Açıklama: 🇹🇷 Yazıyı resme dönüştürür.\n🇬🇧 Converts text to a picture. (Text-to-Image)\n\n💻 Kullanımı: *.toonai*\nℹ️ Açıklama: 🇹🇷 Fotoğraftaki yüzü çizgi film karakterine çevirir.\n🇬🇧 Turns the face in the photo into a cartoon character.\n\n💻 Kullanımı: *.textai <yazı>*\nℹ️ Açıklama: 🇹🇷 Yazdığınız cümleden size yapay bir hikaye yaratır.\n🇬🇧 It creates an artificial story for you from your sentence.\n\n💻 Kullanımı: *.nudityai*\nℹ️ Desc: 🇹🇷 Fotoğraftaki NSFW değerini 1 ve 0 arasında gösterir. \n🇬🇧 It shows the NSFW value between 1 and 0 in the photo.\n\n💻 Kullanımı: *.ganstyle*\nℹ️ Açıklama: 🇹🇷 Yanıtladığınız fotoğrafı seçili olan resim ile birleştirir.\n🇬🇧 Combines the photo you answered with the selected picture.\n\n⚠️ 🇹🇷 *Bütün bu yapay zeka araçları derin öğrenme ile çalışır. Ne kadar fazla kullanırsanız o kadar fazla bilgiyi depolar.* ```Sadece ingilizce karakter kullanın!```\n\n⚠️ 🇬🇧 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');
    }));
    Asena.addCommand({pattern: 'faceai$', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var webimage = await axios.get('https://shot.screenshotapi.net/screenshot?token=4MY3B09-CQHMW6T-PRT830T-Y3HXK40&url=https%3A%2F%2Fthispersondoesnotexist.com%2F&width=1000&height=1000&output=image&file_type=jpeg&wait_for_event=load', { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
    Asena.addCommand({pattern: 'animai', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var min = 10000; 
        var max = 50000;  
        var asenasrandomgen = Math.floor(Math.random() * (+max - +min) + +min); 
        var IMGWADATA = await axios.get('https://shot.screenshotapi.net/screenshot?token=4MY3B09-CQHMW6T-PRT830T-Y3HXK40&url=https://www.thiswaifudoesnotexist.net/example-' + asenasrandomgen + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })
        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            { mimetype: Mimetype.jpg, caption: Config.AFN}
        )
    }));
    Asena.addCommand({pattern: 'colorai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.COLORIZING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'waifuai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.MIXING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {thumbnail: base64str, mimetype: Mimetype.jpg, caption: Config.AFN})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'superai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.IMPROVED,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'moodai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,
        });
        await message.reply(`*Mood:* ${resp.output}`);
    }));
    Asena.addCommand({pattern: 'dreamai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.DREAMAI,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'neuraltalkai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.NEURALTALKAI,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.reply(`*Output:* ${resp.output}`);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'ttiai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
    Asena.addCommand({pattern: 'toonai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.TOONAI,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'nudityai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.client.sendMessage(message.jid, `*Oran:* ${resp.output.nsfw_score}`, MessageType.text, { quoted: message.data });
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'textai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,
        });
        await message.client.sendMessage(message.jid, `*Hikaye:*\n ${resp.output}`, MessageType.text, { quoted: message.data });
    }));
    Asena.addCommand({pattern: 'ganstyle$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.GANSTYLE,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("fast-style-transfer", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
