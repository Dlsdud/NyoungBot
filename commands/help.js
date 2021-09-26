const { MessageEmbed } = require("discord.js")

const embed = new MessageEmbed()
.setTitle("안녕하세요! NyoungBot입니다.")
.setColor('0f4c81')
.setDescription('`!공부`: 공부를 시작하거나 끝내고 싶다면 해당 명령어를 입력하세요. \n `!야`: 인사');

module.exports = {
    name: 'help',
    description: '도움',
    
    execute(message){
        return message.channel.send({ embeds: [embed] });
    }
}