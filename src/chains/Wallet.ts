export interface IWallet {
    connect(): Promise<string>;
    signMessage(message: string): Promise<string>;
    verifyMessage(): Promise<boolean>;
}

export class Wallet implements IWallet {
    token: string = "";
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
        return (window as any).arweaveWallet !== undefined;
    }
    static detectCosmos(): boolean{
        return false;// (window as any).keplr !== undefined;
    }
    static detectEthereum(): boolean{
        return (window as any).ethereum !== undefined;
    }
    static detectNervosPW(): boolean{
        return (window as any).ethereum !== undefined &&
            (window as any).web3 !== undefined &&
            (window as any).Web3Modal !== undefined &&
            (window as any).WalletConnectProvider !== undefined;
    }
    static detectPolkadot(): boolean{
        return false;// (window as any).injectedWeb3 !== undefined;
    }
    static detectNostr(): boolean{
        return (window as any).nostr !== undefined;
    }
    static detectSolana(): boolean{
        return (window as any).solana !== undefined;
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
    buildSignature2(msg: string, sig: any): string {
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