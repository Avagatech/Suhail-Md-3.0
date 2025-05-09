const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_24_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyLFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0lLVDI5OVMzM3VqY1lUTnlCWG5HUVNXK0NWYVJTeTN4L2ZPdjUyQ21QZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVTVYSFlfZVRSUEdTWUU5SG04N1NDd1wiLFxuICBcInBob25lSWRcIjogXCIzNDg3NDAwZS1kNzAwLTQzNWEtYjRjNy0yNjdlNGFlNjBmN2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICA0LFxuICAgICAgNzEsXG4gICAgICAzNixcbiAgICAgIDE0NSxcbiAgICAgIDE4NixcbiAgICAgIDU5LFxuICAgICAgMjM3LFxuICAgICAgNCxcbiAgICAgIDIxLFxuICAgICAgMTgzLFxuICAgICAgMjI5LFxuICAgICAgMTA1LFxuICAgICAgMTUwLFxuICAgICAgMjIzLFxuICAgICAgMTE0LFxuICAgICAgNDksXG4gICAgICAxMTAsXG4gICAgICAyMzYsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMTA5LFxuICAgICAgMjIwLFxuICAgICAgOTIsXG4gICAgICAyMTIsXG4gICAgICAxNzcsXG4gICAgICA0OCxcbiAgICAgIDExMSxcbiAgICAgIDU0LFxuICAgICAgODMsXG4gICAgICAyNTUsXG4gICAgICAxNzgsXG4gICAgICAzLFxuICAgICAgMTEyLFxuICAgICAgMTIwLFxuICAgICAgNjIsXG4gICAgICA3MCxcbiAgICAgIDcxLFxuICAgICAgMTkyLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBXR0RGSk5TXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3ODc5MTg5MDQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCVVNBR1dBX1RFQ0hfU09MVVRJT05TX1VHXCIsXG4gICAgXCJsaWRcIjogXCI4MDc5NzQxMTMxNTc3OToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYlAzNHdCRU15aXFNQUdHQThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFpaTA5dUppVFI0S1l2MTNPeG5DNzlSU2lSbGZrcEF4eFNyKzRTVmplUjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNGVUSHVsS0lLWkdncFVSNG5pV0EyNTYyRnMwd0NDWTRaOVdjQkE1WkdGR1EyanJUUDV1SXNXMzZuMXF1a0lnNGc2cDEwQXBNTWx4aEVaSkVpYm0yQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVTUxcWV2MkpxQ2gvY3Buc2Vqb1ZzOURBKzBQa2lJWTJHWXhYcEE1MFpJMlRhR0crUWhrb1FpenBBcTI0SWFPWDBPRXdwbkhncVZBTFMzTy9ORDlkQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzg3OTE4OTA0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU0OTAyNThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: processconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_24_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyLFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0lLVDI5OVMzM3VqY1lUTnlCWG5HUVNXK0NWYVJTeTN4L2ZPdjUyQ21QZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVTVYSFlfZVRSUEdTWUU5SG04N1NDd1wiLFxuICBcInBob25lSWRcIjogXCIzNDg3NDAwZS1kNzAwLTQzNWEtYjRjNy0yNjdlNGFlNjBmN2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICA0LFxuICAgICAgNzEsXG4gICAgICAzNixcbiAgICAgIDE0NSxcbiAgICAgIDE4NixcbiAgICAgIDU5LFxuICAgICAgMjM3LFxuICAgICAgNCxcbiAgICAgIDIxLFxuICAgICAgMTgzLFxuICAgICAgMjI5LFxuICAgICAgMTA1LFxuICAgICAgMTUwLFxuICAgICAgMjIzLFxuICAgICAgMTE0LFxuICAgICAgNDksXG4gICAgICAxMTAsXG4gICAgICAyMzYsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMTA5LFxuICAgICAgMjIwLFxuICAgICAgOTIsXG4gICAgICAyMTIsXG4gICAgICAxNzcsXG4gICAgICA0OCxcbiAgICAgIDExMSxcbiAgICAgIDU0LFxuICAgICAgODMsXG4gICAgICAyNTUsXG4gICAgICAxNzgsXG4gICAgICAzLFxuICAgICAgMTEyLFxuICAgICAgMTIwLFxuICAgICAgNjIsXG4gICAgICA3MCxcbiAgICAgIDcxLFxuICAgICAgMTkyLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBXR0RGSk5TXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3ODc5MTg5MDQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCVVNBR1dBX1RFQ0hfU09MVVRJT05TX1VHXCIsXG4gICAgXCJsaWRcIjogXCI4MDc5NzQxMTMxNTc3OToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYlAzNHdCRU15aXFNQUdHQThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFpaTA5dUppVFI0S1l2MTNPeG5DNzlSU2lSbGZrcEF4eFNyKzRTVmplUjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNGVUSHVsS0lLWkdncFVSNG5pV0EyNTYyRnMwd0NDWTRaOVdjQkE1WkdGR1EyanJUUDV1SXNXMzZuMXF1a0lnNGc2cDEwQXBNTWx4aEVaSkVpYm0yQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVTUxcWV2MkpxQ2gvY3Buc2Vqb1ZzOURBKzBQa2lJWTJHWXhYcEE1MFpJMlRhR0crUWhrb1FpenBBcTI0SWFPWDBPRXdwbkhncVZBTFMzTy9ORDlkQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzg3OTE4OTA0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU0OTAyNThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
