export interface IWallet {
    connect(): Promise<string>;
    signMessage(message: string): Promise<string>;
    verifyMessage(): Promise<boolean>;
}

export class Wallet implements IWallet {
    account: string = "";
    publicKey: string = "";

    async connect(): Promise<string>{
        return "";
    }

    async signMessage(message: string): Promise<string>{
        return "";
    }
    
    async verifyMessage(): Promise<boolean> {
        return false;
    }

    static detectArweave(): boolean{
        return (window as any).arweaveWallet;
    }
    static detectCosmos(): boolean{
        return false;// (window as any).keplr;
    }
    static detectEthereum(): boolean{
        return (window as any).ethereum;
    }
    static detectPolkadot(): boolean{
        return false;// (window as any).injectedWeb3;
    }
    static detectNostr(): boolean{
        return (window as any).nostr;
    }
    static detectSolana(): boolean{
        return (window as any).solana;
    }

    buildSignature(msg: string, sig: string): string {
        const data = {
            account: this.account,
            publicKey: this.publicKey,
            message: msg,
            signature: sig,
            timestamp: Date.now()
        };
        return JSON.stringify(data, null, 2);
    }
}