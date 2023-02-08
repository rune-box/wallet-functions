import { createIcon } from "@chakra-ui/icons";
import { chakra, forwardRef, ImageProps } from "@chakra-ui/react";
import ada from "./ada.svg";
import algo from "./algo.svg";
import ar from "./ar.svg";
import atom from "./atom.svg";
import btc from "./btc.svg";
import ckb from "./ckb.svg";
import doge from "./doge.svg";
import dot from "./dot.svg";
import eth from "./eth.svg";
import icp from "./icp.svg";
import idena from "./idena.svg";
import ltc from "./icp.svg";
import near from "./near.svg";
import rvn from "./rvn.svg";
import sol from "./sol.svg";
import trx from "./trx.svg";
import xtz from "./xtz.svg";
import masks from "./masks.svg";
import unipass from "./unipass.svg";
import fingerprint from "./fingerprint.svg";

// export const EmptyIcon = createIcon({
//     displayName: "",
//     viewBox: "0 0 128 128",
//     path: (
//         <path width={128} height={128}
//             transform="" 
//             d="" />
//     ),
// });

export const AdaIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={ada} width="1em" height="1em" ref={ref} {...props} />
});
export const AlgoIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={algo} width="1em" height="1em" ref={ref} {...props} />
});
export const ArIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={ar} width="1em" height="1em" ref={ref} {...props} />
});
export const AtomIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={atom} width="1em" height="1em" ref={ref} {...props} />
});
export const BtcIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={btc} width="1em" height="1em" ref={ref} {...props} />
});
export const CkbIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={ckb} width="1em" height="1em" ref={ref} {...props} />
});
export const DogeIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={doge} width="1em" height="1em" ref={ref} {...props} />
});
export const DotIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={dot} width="1em" height="1em" ref={ref} {...props} />
});
export const EthIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={eth} ref={ref} width="1em" height="1em" {...props} />
});
export const IcpIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={icp} ref={ref} width="1em" height="1em" {...props} />
});
export const IdenaIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={idena} ref={ref} width="1em" height="1em" {...props} />
});
export const LtcIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={ltc} ref={ref} width="1em" height="1em" {...props} />
});
export const NearIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={near} ref={ref} width="1em" height="1em" {...props} />
});
export const RvnIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={rvn} ref={ref} width="1em" height="1em" {...props} />
});
export const SolIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={sol} ref={ref} width="1em" height="1em" {...props} />
});
export const TrxIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={trx} ref={ref} width="1em" height="1em" {...props} />
});
export const XtzIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={xtz} ref={ref} width="1em" height="1em" {...props} />
});

export const MasksIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={masks} ref={ref} width="1em" height="1em" {...props} />
});

export const UnipassIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={unipass} ref={ref} width="1em" height="1em" {...props} />
});

export const FingerprintIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={fingerprint} ref={ref} width="1em" height="1em" {...props} />
});

// export const FingerprintIcon = createIcon({
//     displayName: "FingerprintIcon",
//     viewBox: "0 0 128 128",
//     path: (
//         <path width={128} height={128}
//             transform="rotate(0,64,64) translate(18.675000667572,8) scale(3.5,3.5)"
//             d="M15.600021,19.199997C17.400008,24.099991,24.400001,26.199997,24.499976,26.199997L24.199988,27.299988C24.100013,27.299988 22.300027,26.699997 20.199992,25.5 17.400008,23.899994 15.400009,21.799988 14.600022,19.5z M14.90001,15.599991C15.199998,15.599991 15.499985,15.599991 15.800034,15.699997 17.900006,16.399994 19.400006,19.399994 19.400006,19.599991L19.400006,19.699997C19.900004,21.099991,23.600015,22.599991,25.800025,23.299988L25.499976,24.399994C24.900001,24.199997 19.300031,22.5 18.400006,20.099991 17.999982,19.299988 16.699996,17.299988 15.400009,16.799988 14.999986,16.699997 14.600022,16.699997 14.300036,16.899994 14.300036,16.899994 13.699999,17.199997 13.2,17.799988 12.600024,18.599991 12.600024,19.699997 13.100024,21 13.2,21.199997 15.499985,26.5 22.69999,28.599991L22.400003,29.699997C18.300031,28.599991 15.699997,26.399994 14.300036,24.799988 12.7,23 12.100025,21.599991 11.999989,21.5 11.200002,19.399994 11.700001,18 12.300037,17.199997 12.900012,16.399994 13.699999,16 13.800036,16 14.199999,15.799988 14.600022,15.699997 14.90001,15.599991z M14.699998,12.5C15.100022,12.5 15.499985,12.5 15.900009,12.599991 18.800031,13.199997 20.600017,16 20.699992,16.099991L20.699992,16.199997C22.19999,19.399994,25.800025,20,25.899999,20L25.699988,21C25.499976,21 21.49998,20.299988 19.699994,16.599991 19.499982,16.399994 17.999982,14.199997 15.699997,13.599991 14.40001,13.299988 12.999988,13.599991 11.600025,14.599991 11.499989,14.699997 10.700002,15.399994 10.100027,16.599991 9.3000403,18.399994 9.4000149,20.5 10.400014,22.699997 10.400014,22.699997 11.999989,27.099991 19.600019,30.5L19.100019,31.5C11.400013,28 9.4999905,23.399994 9.4000149,23 7.9999924,19.799988 8.4000159,17.399994 9.1000281,15.899994 9.8000393,14.299988 10.900014,13.5 10.99999,13.399994 12.200001,12.899994 13.499987,12.5 14.699998,12.5z M14.204516,9.3859291C14.401588,9.3828049 14.60003,9.3874931 14.800035,9.3999939 17.10002,9.3999939 19.300031,10.299988 21.49998,12.099991 24.199988,14.299988 25.800025,17 25.899999,17.199997L24.900001,17.799988C24.900001,17.799988 23.300027,15.099991 20.699992,13 17.400008,10.299988 13.999987,9.7999878 10.700002,11.599991 10.700002,11.599991 9.2000037,12.399994 7.9999924,14.099991 6.3000427,16.399994 5.9999943,19.199997 6.9000178,22.299988 6.9000178,22.399994 8.4999915,27.5 13.900011,31L13.300036,32C7.4999929,28.199997 5.9000187,22.899994 5.8000432,22.699997 4.4999958,18.299988 5.8000432,15.299988 7.10003,13.5 8.4999915,11.599991 10.200003,10.699997 10.200003,10.599991 11.512501,9.8124962 12.825,9.4078026 14.204516,9.3859291z M14.800035,6.0999908C15.900009,6.0999908 17.10002,6.2999878 18.199994,6.5999908 21.600017,7.6999969 23.800027,9.7999878 23.900001,9.8999939L23.100015,10.699997C23.100015,10.699997 20.99998,8.5999908 17.900006,7.6999969 13.699999,6.3999939 9.7000027,7.5999908 5.9000187,11.199997 5.7000065,11.399994 4.3000446,13.199997 3.4999967,15.899994 2.4000221,19.699997 3.2000092,23.5 5.7000065,27.099991L4.8000441,27.799988C3.3000455,25.699997 2.4000221,23.399994 1.9999981,21.099991 1.7000106,19.299988 1.9000226,17.399994 2.4000221,15.599991 3.3000455,12.5 4.9999953,10.599991 4.9999953,10.5 7.2000051,8.2999878 9.6000271,7 12.100025,6.3999939 12.999988,6.1999969 13.900011,6.0999908 14.800035,6.0999908z M14.100023,3.0999908C17.499984,3.0999908,19.900004,4.1999969,20.100017,4.1999969L19.600019,5.1999969C19.600019,5.1999969 16.499984,3.8999939 12.7,4.1999969 7.6000295,4.6999969 3.7000087,7.7999878 0.99999904,13.399994L0,12.899994C1.600035,9.5999908 3.6000331,7.0999908 5.9999943,5.5 7.9999924,4.1999969 10.200003,3.3999939 12.600024,3.1999969 13.100024,3.0999908 13.600023,3.0999908 14.100023,3.0999908z M13.2,0C14.40001,0,15.100022,0.099990845,15.199998,0.099990845L14.999986,1.2999878C14.90001,1.1999969,8.6000281,0.19999695,3.9999962,4.7999878L3.2000094,4C5.8000432,1.3999939 8.9000159,0.3999939 10.99999,0.099990845 11.900013,0 12.600024,0 13.2,0z" />
//     ),
// });
