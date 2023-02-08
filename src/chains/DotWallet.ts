import { web3Accounts, web3Enable, web3FromSource } from "@polkadot/extension-dapp";
import { stringToHex } from "@polkadot/util";
import { ViewData } from "../client/ViewData";
import { ProviderKeys } from "./ProviderKeys"
import { Wallet } from "./Wallet";

export class DotWallet extends Wallet {
    constructor(){
        super();
        this.token = ProviderKeys.Polkadot;
    }

    async connect(): Promise<string>{
        this.account = "";

        const allInjected = await web3Enable('Runebox');
        if(!allInjected){
            ViewData.toast({
                title: 'No Polkadot wallet detected!',
                description: "Your should install a Polkadot wallet first.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return "";
        }

        const allAccounts = await web3Accounts();
        const account = allAccounts[0];
        this.account = account.address;
        return this.account;
    }
    
    async signMessage(message: string): Promise<string>{
        const allInjected = await web3Enable('Runebox');
        const allAccounts = await web3Accounts();
        const account = allAccounts[0];
        const injector = await web3FromSource(account.meta.source);
        const signRaw = injector?.signer?.signRaw;
        if(!!signRaw){
            const sig = await signRaw({
                address: account.address,
                data: stringToHex(message),
                type: 'bytes'
            });
            return sig.signature;
        }
        return "";
    }
    
    async verifyMessage(): Promise<boolean> {
        return false;
    }

}