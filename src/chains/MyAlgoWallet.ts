import { ViewData } from "../client/ViewData";
import { ProviderKeys } from "./ProviderKeys"
import { Wallet } from "./Wallet";
import MyAlgoConnect from "@randlabs/myalgo-connect";

export class MyAlgoWallet extends Wallet {
    constructor() {
        super();
        this.token = ProviderKeys.Algorand;
    }

    async connect(): Promise<string> {
        this.account = "";
        const myAlgoConnect = new MyAlgoConnect();
        const settings = {
            shouldSelectOneAccount: false,
            openManager: false
        };
        const accounts = await myAlgoConnect.connect(settings);
        const account = accounts[0];
        this.account = account.address;
        return this.account;
    }

    async signMessage(message: string): Promise<string> {
        const myAlgoConnect = new MyAlgoConnect();
        const settings = {
            shouldSelectOneAccount: false,
            openManager: false
        };
        const accounts = await myAlgoConnect.connect(settings);
        const account = accounts[0];

        const encodedMessage = new TextEncoder().encode(message);
        const resSign = await myAlgoConnect.signBytes(encodedMessage, account.address);
        const signature = JSON.stringify(resSign);
        return signature;
    }

    async verifyMessage(): Promise<boolean> {
        return false;
    }

    static async requestETHNetwork(ethereum: any): Promise<any> {
        const result = await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: "0x1"
            }]
        });
        return result;
    }
}