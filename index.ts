import * as io from 'socket.io-client'
import { WebhookClient, MessageEmbed } from 'discord.js'
import { config } from "./config"

const link = config["socket"] + ':' + config["socket-port"]
const donationalerts = io(link);

donationalerts.emit('add-user', { token: config["donation-token"], type: config["type"] });

const channel = new WebhookClient(config["discord-hook-id"], config["discord-hook-token"])
donationalerts.on("donation", (body) => {
    let donate = JSON.parse(body);
    channel.send(
        new MessageEmbed().setAuthor(`New donate from ${donate["username"]}`, config["pick"])
        .setDescription(`Amount: **${donate["amount"]} ${donate["currency"]}**\nMessage: \`\`\`${clear(donate["message"])}\`\`\``)
    )
});
 
function clear(text: string){
    return text
        .replace(/`/g, "'" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
}