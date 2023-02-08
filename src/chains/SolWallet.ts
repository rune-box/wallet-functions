import { ViewData } from "../client/ViewData";
import { ProviderKeys } from "./ProviderKeys"
import { Wallet } from "./Wallet";

export class SolWallet extends Wallet {
    constructor(){
        super();
        this.token = ProviderKeys.Solana;
    }

    async connect(): Promise<string>{
        this.account = "";
        
        const solana = (window as any).solana;
        if(!solana){
            ViewData.toast({
                title: 'No Solana wallet detected!',
                description: "Your should install a Solana wallet first.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return "";
        }

        const resp = await solana.connect();
        this.publicKey = resp.publicKey.toString();
        this.account = this.publicKey;
        return this.account;
    }
    
    async signMessage(message: string): Promise<string>{
        const solana = (window as any).solana;
        const encodedMessage = new TextEncoder().encode(message);
        const signedMessage = await solana.signMessage(encodedMessage, "utf8");
        const signature = JSON.stringify(signedMessage, null, 2);
        return signature;
    }
    
    async verifyMessage(): Promise<boolean> {
        return false;
    }
}