const { exec,execSync,spawn } = require('child_process');
const Functions = require('./lib/functions.js');
const Command = require('./lib/command.js');
const WAConnection = require('./lib/waconnection.js');

global.baileys = require('@adiwajshing/baileys');
global.bot = require('./src/json/botInfo.json');
global.f = new Functions();
global.client = new WAConnection();
global.cmd = new Command(client, botinfo, functions);
global.logo = []
global.clients = [];
global.used_logo = 0

f.run(client);
