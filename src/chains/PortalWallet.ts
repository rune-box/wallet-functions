import PWCore, {
    EthProvider,
    EosProvider, TronProvider,
    Web3ModalProvider,
    ChainID,
    Address,
    Amount,
    AddressType,
    Builder,
    Signer,
    SimpleBuilder,
    EthSigner,
    DefaultSigner,
    IndexerCollector,
    Message
} from '@lay2/pw-core';
import { PWCoreUtility } from '../pw/PWCoreUtility';
import { ProviderKeys } from "./ProviderKeys"
import { Wallet } from "./Wallet";

const Web3 = (window as any).Web3;
const Web3Modal = (window as any).Web3Modal?.default;
const WalletConnectProvider = (window as any).WalletConnectProvider?.default;

export class PortalWallet extends Wallet {
    worker: PWCore | undefined;

    providerName: string = "ETH";
    provider: any | undefined;
    web3Modal: any | undefined;
    visitorAddress: Address | undefined;
    eth: string = "";

    networkChainId = 1;

    network: any = {
        network: "n/a",
        name: "n/a"
    };
    ckbNetwork: any = {
        network: "n/a",
        name: "n/a"
    };

    getProviderOptions() {
        return {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    // You can create a account at https://infura.io/ to use your own id
                    infuraId: "5a41e14da5ef449fbf12157f6736178f",
                },
            },
            //   fortmatic: {
            //     package: Fortmatic,
            //     options: {
            //       // Mikko's TESTNET api key
            //       key: "pk_test_391E26A3B43A3350"
            //     }
            //   },
            //   torus: {
            //     package: Torus,
            //   },
        };
    }

    getChainData(chainId: number) {
        const chainData = PWCoreUtility.SupportedChains.filter(
            (chain: any) => chain.chain_id === chainId
        )[0];
        if (!chainData) {
            throw new Error("ChainId missing or not supported");
        }
        // const API_KEY = process.env.REACT_APP_INFURA_ID;
        const API_KEY = "89a648e271d54224ba4827d348cbaa54";
        if (
            chainData.rpc_url.includes("infura.io") &&
            chainData.rpc_url.includes("%API_KEY%") &&
            API_KEY
        ) {
            const rpcUrl = chainData.rpc_url.replace("%API_KEY%", API_KEY);
            return {
                ...chainData,
                rpc_url: rpcUrl,
            };
        }
        return chainData;
    }

    constructor(){
        super();
        this.token = ProviderKeys.NervosCKB;
        PWCore.setChainId(0);
    }

    async init(): Promise<boolean> {
        if (!this.web3Modal) {
            this.web3Modal = new Web3Modal({
                network: this.getChainData(this.networkChainId).network,
                cacheProvider: false,
                disableInjectedProvider: false,
                providerOptions: this.getProviderOptions(),
            });
            await this.web3Modal.clearCachedProvider();
        }
        return true;
    }

    async connect(): Promise<string> {
        this.account = "";
        await this.doConnect();
        return this.account;
    }

    async doConnect() {
        switch (this.providerName) {
            // case 'ETH': this.provider = new EthProvider(); break
            case 'ETH':
                try {
                    const p = await this.web3Modal.connect();
                    this.provider = new Web3ModalProvider(new Web3(p));
                    //this.provider = new EthProvider();
                    const tmp = this.getChainData(this.networkChainId);
                    this.network = {
                        network: tmp.network,
                        name: tmp.name
                    };
                } catch (err) {
                    console.log('connect err', err);
                }
                break;
            case 'EOS':
                this.provider = new EosProvider(PWCoreUtility.EOS_NETWORK);
                // todo
                this.network = {
                    network: "n/a",
                    name: "EOS"
                };
                break;
            case 'TRON':
                this.provider = new TronProvider();
                // todo
                this.network = {
                    network: "n/a",
                    name: "TRON"
                };
                break;
            default:
                throw new Error('Unsupported Provider');
        }
        try {
            // Node_Testnet_Aggron, Node_Testnet_Aggron_IndexCollector
            // Node_Mainnet, Node_Mainnet_IndexCollector
            const chainIndex = 2;
            this.worker = await new PWCore(PWCoreUtility.CKB_Chains[chainIndex].network_uri).init(
                this.provider,
                new IndexerCollector(PWCoreUtility.CKB_Chains[chainIndex].indexer_collector_uri)
            );
            this.ckbNetwork = {
                network: PWCoreUtility.CKB_Chains[chainIndex].name,
                name: PWCoreUtility.CKB_Chains[chainIndex].name
            };
            this.visitorAddress = PWCore.provider.address;
            this.account = this.visitorAddress.toCKBAddress();
        }
        finally {
        }
    }

    async signMessage(message: string): Promise<string> {
        // neuron
        // const digest = SignMessage.signatureHash(message)
        // const ecPair = new ECPair(privateKey)
        // const signature = ecPair.signRecoverable(digest)

        // const digest = PWCoreUtility.hashMessage(message);

        // const lockScript = this.visitorAddress.toLockScript();
        // const msg_obj: Message = {
        //     index: 0,
        //     message: message,
        //     lock: lockScript
        // };
        // const messages = [msg_obj];
        //let signer: EthSigner = new EthSigner()
        
        const signature = await PWCore.provider.sign(message);
        return signature;
    }

    async verifyMessage(): Promise<boolean> {
        return false;
    }
}