require('dotenv').config();
const {
  Client,
  GatewayIntentBits,
  Emoji,
  GuildEmoji,
  GuildMember,
  Guild,
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// const commands = [
//   {
//     name: 'ping',
//     description: 'Replies with Pong!',
//   },
// ];

// const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

// (async () => {
//   try {
//     console.log('Started refreshing application (/) commands.');

//     await rest.put(Routes.applicationCommands('1064255805861408929'), {
//       body: commands,
//     });

//     console.log('Successfully reloaded application (/) commands.');
//   } catch (error) {
//     console.error(error);
//   }
// })();

const getRole = (role, guild) => {
  return guild.roles.cache.find(r => r.name === role);
};

client.once('ready', () => {
  console.log('Logged in as', client.user.tag);
});

client.on('messageCreate', message => {
  console.log(message);
  message.author.send('Welcome!');
  const role = getRole('test', message.guild);
  // new Guild(client, )
  // new GuildMember()
  message.member.roles.add(role);
});

client.login(process.env.DISCORD_TOKEN);
