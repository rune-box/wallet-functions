import { Keplr, StdSignDoc } from "@keplr-wallet/types";
import { OfflineSigner, SigningCosmosClient } from "@cosmjs/launchpad";
import { ViewData } from "../client/ViewData";
import { ProviderKeys } from "./ProviderKeys"
import { Wallet } from "./Wallet";

export class Cosmos {
    static chainId: "cosmoshub-4";
}

export class KeplrWallet extends Wallet {
    constructor() {
        super();
        this.token = ProviderKeys.Atom;
    }

    async connect(): Promise<string> {
        this.account = "";
        const keplr = (window as any).keplr as Keplr;
        if (!keplr) {
            ViewData.toast({
                title: 'No Keplr wallet detected!',
                description: "Your should install Keplr wallet first.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return "";
        }

        const chainId = "cosmoshub-4";
        await keplr.enable(chainId);
        const offlineSigner = (window as any).getOfflineSigner(chainId) as OfflineSigner;
        const accounts = await offlineSigner.getAccounts();
        const client = new SigningCosmosClient(
            "https://lcd-cosmoshub.keplr.app",
            accounts[0].address,
            offlineSigner,
        );
        this.account = accounts[0].address;
        return this.account;
    }

    async signMessage(message: string): Promise<string> {
        const keplr = (window as any).keplr as Keplr;
        const chainId = "cosmoshub-4";
        await keplr.enable(chainId);
        //const offlineSigner = (window as any).getOfflineSigner(chainId) as OfflineSigner;
        const sig = await keplr.signArbitrary(chainId, this.account, message);
        this.publicKey = sig.pub_key.value;
        const signature = sig.signature;
        return signature;
    }

    async verifyMessage(): Promise<boolean> {
        return false;
    }
}