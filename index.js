const fs = require('fs');   // node.js가 기본적으로 가지고 있는 모듈
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]})
const { prefix, token } = require('./config.json');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', ()=>{
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg=>{
    if(!msg.content.startsWith(prefix)||msg.author.bot) return;
        
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift()    
    
    if(!client.commands.has(command)) return;
 
    try{
        client.commands.get(command).execute(msg, args);
    } catch(error){
        console.error(error);
    }
})

client.login(token)




