/* Copyright (C) 2022 Ayodya

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

Wa.me/+94702979973

*/

const Neotro = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

Neotro.addCommand({pattern: 'list', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

// send a list message!

    const rows = [

        {title: '🤖 Setvar', description: "⚙Bot of understanding and basic help.\n\n\n*◁ === 🍃🎯 basic help === ▷*\n\n🎭 *.alive *\n 🔮 Bot testing will occur on operation.\n\n🎭 *.muthu*\n🔮 shows complete command list.\n\n🎭 *.owner*\n🔮 BOT owners show details\n\n🎭 *.setvar BOT_NAME: your text*\n🔮 obe boṭge name change is shown in the command and your Logo captions.\n\n🎭 *.setvar WORK_TYPE: public*\n🔮 Bot public to.\n\n🎭 *.setvar WORK_TYPE: private*\n🔮 Bot private to.\n\n🎭 *.restart*\n🔮 Bot revived again when tight\n\n🎭 *.shutdown*\n\n🔮 Bot was closed ⚙️ should be back on in Resources at Heroku on\n\n🎭 *.setvar SUDO: 94XXXXXXXX*\n🔮 Bot to another ruler Based on public / private, he can control both occasions.\n\n🎭 *.dyno*\n What is the amount of hours to your 🔮 Heroku. 550 hours per month from the previous month, while it ended the moment your bot will wait a month off vē.īlaga is to create a new classifieds or heroin.\n\n🎭 *.pinky on*\n\n🔮 AI EVA Chat BOT This can by implemented.\n🎭 *.pinky off* \ n🔮 AI EVA Chat BOT is deactivated.\n\n🎭 *.botname*\n🔮 To change bot name\n\n🎭 *.owncmnd*\n🔮 Owner Menu is making in the.\n⚙️ ahead to enter the relevant details eleven hash. For details\n🧚 *setvar ALIVE_MESSAGE: The MSG is*\n🔮 Bot Alive Message appended to change if we want to.\n\n🎭 *setvar ALIVE_LOGO: link*\n🔮 Bot appended alive picture change is Xolela Photo Link to your Site Upload button in the lower one\n🎲 https: imgbb.com\n🔮 telegram use the Bot easy to leave a link that can get Img\n🎲 https: t.me/FnTelegraphBot\n🎭 *setvar WELCOME_GIF: link*\n🔮 This site down there you Upload a GIF rials to change one's GIF Welcome msg to put a link\n🎲 https: www.mailboxdrive.com\n🎭 *setvar BYE_GIF: link*\n🔮 tied Good bye Logo change, as puluvanuḍa Simple put\n\n ", rowId:" rowid1"},

        {title: '⚠️ Git', description: "𝚈𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚑𝚎 𝚐𝚒𝚝 𝚕𝚒𝚗𝚔🥀.\n\n\n*◁ === 🍃🎯 𝙲𝚘𝚗𝚝𝚊𝚌𝚝 🥶 === ▷*\n\nwa.me//+919645697828\n\n ", rowId:"rowid2"},

        {title: '🚀 Xmedia', description: "XMEDIA COMMANDS ARE.\n\n\n💻Usage: *.mp4enhance*\n🎐Desc:Enhance video’s quality.\n\n💻Usage: *.interp*\n🎐Desc:Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\n🎐Desc:Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\n🎐Desc:Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\n🎐Desc: Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\n🎐Desc:Converts video to gif.\n\n💻Usage: *.agif*\n🎐Desc:Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\n🎐Desc: Blurs the background of the video.\n\n💻Usage: *.mp4stab*\n🎐Desc: Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\n🎐Desc: Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\n🎐Desc:Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\n🎐Desc:Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\n🎐Desc:Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\n🎐Desc:Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\n🎐Desc: Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\n🎐Desc: Plays the video in reverse.\n\n💻Usage: *.mp4edge*\n🎐Desc:Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\n🎐Desc: Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\n🎐Desc: Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\n🎐Desc: Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\n🎐Desc: Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\n🎐Desc: Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\n🎐Desc: Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\n🎐Desc: Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\n🎐Desc: Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\n🎐Desc:Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\n🎐Desc:Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\n🎐Desc:Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\n🎐Desc:Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\n🎐Desc:  Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\n🎐Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\n🎐Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\n🎐Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\n🎐Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\n🎐Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\n🎐Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\n🎐Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\n🎐Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\n🎐Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\n🎐Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\n🎐Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n ", rowId:" rowid3"},

        {title: 'OWNER 🙈', description: "BOT OWNER.\n\n\nhttp://wa.me/+94702979973\n\n ", rowId:" rowid4"},

        {title: 'Free fire 🧞', description: "Free fire logo.\n\n\n*_50 FF LOGO PACK_*\n\n*🥀.ff01 : Makes FF logo*\n*send free fire logo*\n*🥀.ff02 : Makes FF logo*\n*send free fire logo*\n*🥀.ff03 : Makes FF logo*\n*send free fire logo*\n*🥀.ff04 : Makes FF logo*\n*send free fire logo*\n*🥀.ff5 : Makes FF logo*\n*send free fire logo*\n*🥀.ff6 : Makes FF logo*\n*send free fire logo*\n*🥀.ff07 : Makes FF logo*\n*send free fire logo*\n*🥀.ff08 : Makes FF logo*\n*send free fire logo*\n*🥀.ff09 : Makes FF logo*\n*send free fire logo*\n*🥀.ff10 : Makes FF logo*\n*send free fire logo*\n*🥀.ff12 : Makes FF logo*\n*send free fire logo*\n*🥀.ff13 : Makes FF logo*\n*send free fire logo*\n*🥀.ff14 : Makes FF logo*\n*send free fire logo*\n*🥀.ff15 : Makes FF logo*\n*send free fire logo*\n*🥀.ff16 : Makes FF logo*\n*send free fire logo*\n*🥀.ff17 : Makes FF logo*\n*send free fire logo*\n*🥀.ff18 : Makes FF logo*\n*send free fire logo*\n*🥀.ff19 : Makes FF logo*\n*send free fire logo*\n*🥀.ff20 : Makes FF logo*\n*send free fire logo*\n*🥀.ff21 : Makes FF logo*\n*send free fire logo*\n*🥀.ff22 : Makes FF logo*\n*send free fire logo*\n*🥀.ff23 : Makes FF logo*\n*send free fire logo*\n*🥀.ff24 : Makes FF logo*\n*send free fire logo*\n*🥀.ff25 : Makes FF logo*\n*send free fire logo*\n*🥀.ff26 : Makes FF logo*\n*send free fire logo*\n*🥀.ff27 : Makes FF logo*\n*send free fire logo*\n*🥀.ff28 : Makes FF logo*\n*send free fire logo*\n*🥀.ff29 : Makes FF logo*\n*send free fire logo*\n*🥀.ff30 : Makes FF logo*\n*send free fire logo*\n*🥀.ff31 : Makes FF logo*\n*send free fire logo*\n*🥀.ff32 : Makes FF logo*\n*send free fire logo*\n*🥀.ff33 : Makes FF logo*\n*send free fire logo*\n*🥀.ff34 : Makes FF logo*\n*send free fire logo*\n*🥀.ff35 : Makes FF logo*\n*send free fire logo*\n*🥀.ff36 : Makes FF logo*\n*send free fire logo*\n*🥀.ff37 : Makes FF logo*\n*send free fire logo*\n*🥀.ff38 : Makes FF logo*\n*send free fire logo*\n*🥀.ff39 : Makes FF logo*\n*send free fire logo*\n*🥀.ff40 : Makes FF logo*\n*send free fire logo*\n*🥀.ff41 : Makes FF logo*\n*send free fire logo*\n*🥀.ff42 : Makes FF logo*\n*send free fire logo*\n*🥀.ff43 : Makes FF logo*\n*send free fire logo*\n*🥀.ff44 : Makes FF logo*\n*send free fire logo*\n*🥀.ff45 : Makes FF logo*\n*send free fire logo*\n*🥀.ff46 : Makes FF logo*\n*send free fire logo*\n*🥀.ff47 : Makes FF logo*\n*send free fire logo*\n*🥀.ff48 : Makes FF logo*\n*send free fire logo*\n*🥀.ff49 : Makes FF logo*\n*send free fire logo*\n*🥀.ff50 : Makes FF logo*\n*send free fire logo* ", rowId:" rowid5"},

        {title: '🎯 Help', description: "\n\n╭────────────────╮\n         💜PRINCE MUTHU💜 \n ╰────────────────╯\n ❏ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs \n ╭──────────────── \n │ 🌺 ᴀᴅᴅ \n │ 🌺 ʙᴀɴ \n │ 🌺 ᴍᴜᴛᴇ \n │ 🌺 ᴜɴᴍᴜᴛᴇ \n │ 🌺 ᴘʀᴏᴍᴏᴛᴇ \n │ 🌺 ᴅᴇᴍᴏᴛᴇ \n │ 🌺 ɪɴᴠɪᴛᴇ \n │ 🌺 ᴊᴏɪɴ \n │ 🌺 ᴡᴇʟᴄᴏᴍᴇ \n │ 🌺 ɢᴏᴏᴅʙʏᴇ \n │ 🌺 ᴋɪᴄᴋᴍᴇ \n │ 🌺 ᴛᴀɢᴀʟʟ \n╰──────────────── \n ❏ ᴏᴡɴᴇʀ ᴄᴜᴍᴍᴇɴᴅs \n ╭──────────────── \n │ 🌺ʙɢᴍ ᴏɴ/ᴏғғ \n │ 🌺ᴛʜᴇʀɪ ᴏɴ/ᴏғғ \n │ 🌺ʙᴀɴ \n │ 🌺ᴛᴀɢᴀᴅᴍɪɴ \n │ 🌺 ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ ᴏɴ/ᴏғғ \n │ 🌺 ᴀɴᴛɪʟɪɴᴋ ᴏɴ/ᴏғғ \n │ 🌺 ᴡᴀʀɴ \n │ 🌺 ʙᴏᴛɴᴀᴍᴇ \n ╰──────────────── \n ❏ ᴅᴏᴡɴʟᴏᴅ ᴄᴏᴍᴍᴀɴᴅs \n ╭──────────────── \n │ 🌺 sᴏɴɢ \n │ 🌺 sɪɴɢ \n │ 🌺 ʟʏʀɪᴄ \n │ 🌺 ᴠɪᴅᴇᴏ \n │ 🌺 ɪɴsᴛᴀ \n │ 🌺 ɪᴍɢ \n │ 🌺 ss \n │ 🌺 ᴡɪᴋɪ \n ╰──────────────── \n ❏ ᴍɪsᴄ ᴄᴏᴍᴍᴀɴᴅs \n │ 🌺 ɢɪᴛ \n │ 🌺 ᴏᴡɴᴇʀ \n │ 🌺 ᴏᴡɴᴇʀᴄᴍɴᴅ \n │ 🌺 ᴀʟɪᴠᴇ \n │ 🌺 xᴍᴇᴅɪᴀ \n │ 🌺 ɢɪᴛʜᴜʙ \n │ 🌺 sᴄᴀɴ \n │ 🌺 ʀᴅᴍᴏʀᴇ \n │ 🌺 ɴᴇᴡs \n │ 🌺 ᴇᴍᴏ \n │ 🌺 ғғɪʀᴇ \n │ 🌺 ᴀɴɪᴍᴇ \n │ 🌺 ʀᴇɴᴀᴍᴇ \n │ 🌺 ᴍᴘ3 \n │ 🌺 ᴍᴘ4 \n │ 🌺 sᴛɪᴄᴋᴇʀ \n │ 🌺 ᴘʜᴏᴛᴏ \n │ 🌺 ᴛᴛs \n │ 🌺 ᴜɴᴠᴏɪᴄᴇ \n │ 🌺 ʀᴇᴍᴏᴠᴇʙɢ \n │ 🌺 ᴀᴛᴛᴘ \n │ 🌺 ᴛʀᴛ \n │ 🌺 ᴄᴀʟᴄ \n │ 🌺 ᴊᴏᴋᴇ \n │ 🌺 ᴍᴏʟᴜ \n │ 🌺 ɪɴsᴜʟᴛ \n │ 🌺 ᴡᴀᴍᴇ \n │ 🌺 ᴘʟᴜɢɪɴ \n │ 🌺 ʀᴇᴍᴏᴠᴇ \n │ 🌺 ғɪʟᴛᴇʀ \n │ 🌺 ᴊɪᴅ \n │ 🌺 ʙʟᴏᴄᴋ \n │ 🌺 ᴜɴʙʟᴏᴄᴋ \n │ 🌺 sʜᴏʀᴛ \n │ 🌺 ᴡʜᴏɪs \n │ 🌺 ᴡᴀʟʟᴘᴀᴘᴇʀ \n │ 🌺 sʜᴏᴡ \n │ 🌺 ᴍᴏᴠɪᴇ \n │ 🌺 ᴄᴏᴠɪᴅ \n │ 🌺 ᴘɪɴɢ \n ╰──────────────── \n ❏ ʜᴇʀᴏᴋᴜ ᴄᴏᴍᴍᴀɴᴅs \n ╭──────────────── \n │ 🌺 ʀᴇsᴛᴀʀᴛ \n │ 🌺 sʜᴜᴛᴅᴏᴡɴ \n │ 🌺 sᴇᴛᴠᴀʀ \n │ 🌺 ɢᴇᴛᴠᴀʀ \n │ 🌺 ᴀʟʟᴠᴀʀ \n │ 🌺 sᴜᴅᴏ \n │ 🌺 ᴜᴘᴅᴀᴛᴇ \n │ 🌺 ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ \n ╰──────────────── ", rowId:" rowid6"},

        {title: '🧞 Mmpack', description: "\n\n*╔═════◉ 𝙱𝙰𝙳𝙱𝙾𝚈 ◉═════╗*\n           💜PRINCE MUTHU💜\n*╚══▣══◉𝙼𝙼𝙿𝙰𝙲𝙺𝚂◉══▣══╝*\n\n*🍁.my3            ❴your text❵*\n*🍁.fuck         ❴your text❵*\n*🍁.hii         ❴your text❵*\n*🍁.sir            ❴your text❵*\n*🍁.yasai             ❴your text❵*\n*🍁.hapoi             ❴your text❵*\n*🍁.uddika        ❴your text❵*\n*🍁.aah      ❴your text❵*\n*🍁.aah          ❴your text❵*\n*🍁.asai            ❴your text❵*\n*🍁.quby1         ❴your text❵*\n*🍁.quby2         ❴your text❵*\n*🍁.quby3              ❴your text❵*\n*🍁.quby4          ❴your text❵*\n*🍁.cat1       ❴your text❵*\n*🍁.cat2         ❴your text❵*\n*🍁.cat3        ❴your text❵*\n*🍁.cat4            ❴your text❵*\n*🍁.trollikka1             ❴your text❵*\n*🍁.trollikka2             ❴your text❵*\n*🍁.trollikka3        ❴your text❵*\n*🍁.trollikka4      ❴your text❵*\n*🍁.doggy1          ❴your text❵*\n*🍁.doggy2            ❴your text❵*\n*🍁.doggy3         ❴your text❵*\n*🍁.doggy4         ❴your text❵*\n*🍁.cry              ❴your text❵*\n*🍁.disaster         ❴your text❵*\n*🍁.yeah            ❴your text❵*\n*🍁.innocent         ❴your text❵*\n*🍁.jagathy         ❴your text❵*\n*🍁.amboo            ❴your text❵*\n*🍁.catangry1    ❴text❵*\n*🍁.catangry2    ❴text❵*\n*🍁.catangry3    ❴text❵*\n*🍁.catangry4    ❴text❵*\n*🍁.catsed1    ❴text❵*\n*🍁.catsed2    ❴text❵*\n*🍁.catsed3    ❴text❵*\n*🍁.catsed4    ❴text❵*\n*🍁.trollettan1    ❴text❵*\n*🍁.trollettan2    ❴text❵*\n*🍁.trollettan3    ❴text❵*\n*🍁.trollettan4    ❴text❵*\n*🍁.trollvijay1    ❴text❵*\n*🍁.trollvijay2    ❴text❵*\n*🍁.trollvijay3    ❴text❵*\n*🍁.trollvijay4    ❴text❵*\n*🍁.cute1    ❴text❵*\n*🍁.cute2    ❴text❵*\n*🍁.cute3    ❴text❵*\n*🍁.cute4    ❴text❵*\n*🍁.khaby1    ❴text❵*\n*🍁.khaby2    ❴text❵*\n*🍁.khaby3    ❴text❵*\n*🍁.khaby4    ❴text❵*\n*🍁.shelby1    ❴text❵*\n*🍁.shelby2    ❴text❵*\n*🍁.shelby3    ❴text❵*\n*🍁.shelby4    ❴text❵*\n*🍁.shinchan1    ❴text❵*\n*🍁.shinchan2    ❴text❵*\n*🍁.shinchan3    ❴text❵*\n*🍁.shinchan4    ❴text❵*\n*🍁.tom1    ❴text❵*\n*🍁.tom2    ❴text❵*\n*🍁.tom3    ❴text❵*\n*🍁.tom4    ❴text❵*\n*🍁.jerry1    ❴text❵*\n*🍁.jerry2    ❴text❵*\n*🍁.jerry3    ❴text❵*\n*🍁.jerry4    ❴text❵*\n*🍁.smileinpain1    ❴text❵*\n*🍁.smileinpain2    ❴text❵*\n*🍁.smileinpain3    ❴text❵*\n*🍁.smileinpain4    ❴text❵*\n\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷𝙲𝚘𝚍𝚎𝚍 𝚋𝚢: 𝚂𝚑𝚊𝚑𝚒𝚍 𝚂𝚎𝚛💜*", rowId:" rowid7"}

       ]

       const sections = [{title: "✯ɪͥᴛͭsᷤᴍͫᴇͤ☚⃟፝✪Ayo", rows: rows}]

       const button = {

        buttonText: '𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘🤗',

        description: "*~_____💜PRINCE MUTHU💜_____~*",

        sections: sections,

        listType: 1

       }

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));

