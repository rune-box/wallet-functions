import { ethers } from "ethers";
import { Wallet } from "./Wallet";

export class EthWallet extends Wallet {
    async connect(): Promise<string>{
        this.account = "";
        
        const ethereum = (window as any).ethereum;
        const ethNetwork = await EthWallet.requestETHNetwork(ethereum);
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        this.account = accounts[0];
        return this.account;
    }
    
    async signMessage(message: string): Promise<string>{
        const ethereum = (window as any).ethereum;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner(this.account);
        const signature = await signer.signMessage(message);
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