import { AppConfig, UserSession, showConnect,  openSignatureRequestPopup, SignatureData, FinishedAuthData } from '@stacks/connect';
import { StacksNetwork } from '@stacks/network';
import { ViewData } from "../client/ViewData";
import { ProviderKeys } from "./ProviderKeys"
import { Wallet } from "./Wallet";
import { AppSettings } from "../client/AppSettings";

export class StacksWallet extends Wallet {
    //appConfig = new AppConfig(['publish_data']);//'store_write', 'publish_data'
    userSession = new UserSession({ appConfig: new AppConfig([]) });

    constructor(){
        super();
        this.token = ProviderKeys.Stacks;
    }

    connect2(onFinish: (payload: FinishedAuthData) => void, onCancel: () => void ){
        this.account = "";
        showConnect({
            userSession: this.userSession, // `userSession` from previous step, to access storage
            appDetails: {
              name: AppSettings.appName,
              icon: AppSettings.appIcon,
            },
            onFinish: (payload: FinishedAuthData) => {
                this.userSession = payload.userSession;
                const userData = this.userSession.loadUserData();
                //authResponsePayload
                // console.log("userData");
                // console.log(userData);
                // console.log("authResponse");
                // console.log(payload.authResponse);
                console.log("authResponsePayload");
                console.log(payload.authResponsePayload);
                this.account = payload.authResponsePayload.profile.stxAddress.mainnet;
                const pks = payload.authResponsePayload.public_keys;
                if(pks && pks.length > 0){
                    this.publicKey = pks[0];
                }
                if(onFinish){ onFinish(payload); }
            },
            onCancel,
          });
    }
    
    async signMessage2(message: string, onFinish: (data: SignatureData) => void, onCancel: () => void): Promise<void>{
        await openSignatureRequestPopup({
            message,
            network: StacksNetwork.fromName("mainnet"),
            // stxAddress: this.account,
            userSession: this.userSession,
            onFinish: (data: SignatureData) => {
                // console.log("sig data:");
                // console.log(data);
                this.publicKey = data.publicKey;
                if(onFinish){ onFinish(data); }
            },
            onCancel });
    }
    
    async verifyMessage(): Promise<boolean> {
        return false;
    }
}