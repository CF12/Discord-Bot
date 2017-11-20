// Import Dependencies
const DiscordJS = require('discord.js')

// Load Config Files
let cfg
try {
  cfg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'config.json')), 'utf8')
} catch (err) {
  if (err) throw err
}

// Create bot instance
const bot = new DiscordJS.Client()

// Variable Declaration
let pf = '$'

// Init Bot
bot.login(cfg.bot_token)

// On: Bot ready
bot.on('ready', () => {
  console.log('Bot started!')
  bot.user.setPresence({ game: { name: `Version ${cfg.version}`, type: 0 } })
})

// On: Message Creation
bot.on('message', (msg) => {
  // Init commands here
})

