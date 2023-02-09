import { UniPassPopupSDK } from "@unipasswallet/popup-sdk";
import {
    ChainType,
    ConnectType,
    MessageTypes,
    TypedMessage,
    UniPassTheme,
    UPEvent,
    UPEventType,
} from "@unipasswallet/popup-types";
import { ViewData } from "../client/ViewData";
import { ProviderKeys } from "./ProviderKeys"
import { Wallet } from "./Wallet";

export class UniPassWallet extends Wallet {
    upWallet: UniPassPopupSDK;
    constructor() {
        super();
        this.token = ProviderKeys.ETH;
        this.product = ProviderKeys.UniPassWallet;
        this.upWallet = new UniPassPopupSDK({
            env: "prod",
            // for polygon mainnet
            chainType: "eth",
            appSettings: {
                //theme: UniPassTheme.LIGHT,
                appName: "Runebox",
                appIcon: "https://www.runebox.xyz/images/logo.png",
            },
        });
    }

    async connect(): Promise<string> {
        this.account = "";
        const account = await this.upWallet.login({
            email: true,
            eventListener: (event: UPEvent) => {
                console.log("event", event);
                const { type, body } = event;
                if (type === UPEventType.REGISTER) {
                    // console.log("account", body);
                    // ElMessage.success("a user register");
                }
            },
            connectType: "both",
        });
        const { address, email } = account;
        this.account = address;
        return this.account;
    }

    async signMessage(message: string): Promise<string> {
        const signature = await this.upWallet.signMessage(message);
        return signature;
    }

    async verifyMessage(): Promise<boolean> {
        return false;
    }
}