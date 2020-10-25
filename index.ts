import * as io from 'socket.io-client'
import { config } from "./config"

const link = config["socket"] + ':' + config["socket-port"]
const donationalerts = io(link);

donationalerts.emit('add-user', { token: config["donation-token"], type: config["type"] });
donationalerts.on("donation", (body) => {
    let donate = JSON.parse(body);
    console.log(`- Username: ${donate["username"]}\n- Amount: ${donate["amount"]} ${donate["currency"]}\n- Message: ${donate["message"]}`)
});
