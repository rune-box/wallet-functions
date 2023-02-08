import { PermissionType } from "arconnect";
import Arweave from "arweave";
import { ViewData } from "../client/ViewData";
import { ProviderKeys } from "./ProviderKeys"
import { Wallet } from "./Wallet";

export class ArWallet extends Wallet {
    constructor(){
        super();
        this.token = ProviderKeys.ETH;
    }

    async connect(): Promise<string>{
        this.account = "";
        const arWallet = window.arweaveWallet;
        if(!arWallet){
            ViewData.toast({
                title: 'No Arweave wallet detected!',
                description: "Your should install a Arweave wallet first.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return "";
        }
        
        // arweave.js
        const ar = Arweave.init({
            host: 'arweave.net',
            port: 443,
            protocol: 'https'
        });
        
        const permissions: Array<PermissionType> = ['ACCESS_ADDRESS', 'SIGNATURE', 'ACCESS_PUBLIC_KEY'];//
        await arWallet.connect(permissions, {
                name: "DNA"
            }, {
                host: 'arweave.net',
                port: 443,
                protocol: 'https'
            });
        this.account = await arWallet.getActiveAddress();
        this.publicKey = await arWallet.getActivePublicKey();
        return this.account;
    }
    
    async signMessage(message: string): Promise<string>{
        const arWallet = window.arweaveWallet;
        const msgData = Arweave.utils.stringToBuffer(message);
        const sigData = await arWallet.signature(msgData, {
            name: "RSA-PSS",
            saltLength: 32,
        });
        const signature = Arweave.utils.bufferTob64(sigData);
        return signature;
    }
    
    async verifyMessage(): Promise<boolean> {
        return false;
    }

}