export interface IWallet {
    signMessage(): Promise<string>;
    verifyMessage(): Promise<boolean>;
}

export class Wallet implements IWallet {
    async signMessage(): Promise<string>{
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
}