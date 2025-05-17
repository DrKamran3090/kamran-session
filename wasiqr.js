const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Wasi_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function DRKAMRAN_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Wasi_Tech = Wasi_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Wasi_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Wasi_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id, { text: '' + b64data });
	
				   let TREX_MD_TEXT = `
┏━━━━━━━━━━━━━━
𝐈𝐓𝐒 KAMRAN 𝐌𝐃 𝐁𝐎𝐓 
𝐘𝐎𝐔 𝐀𝐑𝐄 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃
> 𝐃𝐄𝐕 𝐏𝐎𝐏𝐊𝐈𝐃
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
𝐏𝐎𝐏𝐊𝐈𝐃 𝐏𝐑𝐎𝐉𝐄𝐂𝐓𝐒
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐏𝐀𝐆𝐄 = https://whatsapp.com/channel/0029Vb6mAlz5K3zMSP0TQq3X
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐌𝐄 𝐕𝐈𝐀
𝐌𝐘 𝐋𝐈𝐍𝐊?https://wa.me/923195068309?
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*𝐏𝐎𝐏𝐊𝐈𝐃*
_____________________________________
	
_DONT FORGET TO FORK AND STAR MY REPO_`
	 await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id,{text:KAMRAN_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Wasi_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					WASI_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await KAMRAN_MD_QR_CODE()
});
module.exports = router
