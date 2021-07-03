import * as io from 'socket.io-client'
import { config } from "./config"

const donationalerts = io(`${config["socket"]}:${config["socket-port"]}`);
donationalerts.emit('add-user', { token: config["donation-token"], type: config["type"] });
donationalerts.on("donation", (donate) => {
    donate = JSON.parse(donate);
    // something code...
    let data: Array<string> = [
        `- Username: ${donate["username"]}`,
        `- Amount: ${donate["amount"]} ${donate["currency"]}`,
        `- Message: ${donate["message"]}`
    ];
    console.log(`${data.join("\n")}`);
});
