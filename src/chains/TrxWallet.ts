import { ViewData } from "../client/ViewData";
import { ProviderKeys } from "./ProviderKeys"
import { Wallet } from "./Wallet";

export class TrxWallet extends Wallet {
    constructor(){
        super();
        this.token = ProviderKeys.Tron;
    }

    async connect(): Promise<string>{
        this.account = "";
        
        const tronLink = (window as any).tronLink;
        if(!tronLink){
            ViewData.toast({
                title: 'No Tron wallet detected!',
                description: "Your should install a Tron wallet first.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return "";
        }

        const resp = await tronLink.request({method: 'tron_requestAccounts'})
        if(resp.code !== 200){
            ViewData.toast({
                title: 'Failed!',
                description: "User cancelled.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return "";
        }
        const tronWeb = (window as any).tronWeb;
        //this.publicKey = tronWeb.defaultAddress.base58;
        this.account = tronWeb.defaultAddress.base58;
        return this.account;
    }
    
    async signMessage(message: string): Promise<string>{
        const tronWeb = (window as any).tronWeb;
        const signature = await tronWeb.trx.signMessageV2(message);
        return signature;
    }
    
    async verifyMessage(): Promise<boolean> {
        return false;
    }
}