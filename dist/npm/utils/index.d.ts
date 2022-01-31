/// <reference types="node" />
import { classicAddressToXAddress, decodeAccountID, decodeAccountPublic, decodeNodePublic, decodeSeed, decodeXAddress, encodeAccountID, encodeAccountPublic, encodeNodePublic, encodeSeed, encodeXAddress, isValidClassicAddress, isValidXAddress, xAddressToClassicAddress } from 'ripple-address-codec';
import { LedgerEntry } from '../models/ledger';
import { Response } from '../models/methods';
import { PaymentChannelClaim } from '../models/transactions/paymentChannelClaim';
import { Transaction } from '../models/transactions/transaction';
import { deriveKeypair, deriveXAddress } from './derive';
import getBalanceChanges from './getBalanceChanges';
import { hashSignedTx, hashTx, hashAccountRoot, hashSignerListId, hashOfferId, hashTrustline, hashTxTree, hashStateTree, hashLedger, hashLedgerHeader, hashEscrow, hashPaymentChannel } from './hashes';
import { percentToTransferRate, decimalToTransferRate, transferRateToDecimal, percentToQuality, decimalToQuality, qualityToDecimal } from './quality';
import signPaymentChannelClaim from './signPaymentChannelClaim';
import { rippleTimeToISOTime, isoTimeToRippleTime, rippleTimeToUnixTime, unixTimeToRippleTime } from './timeConversion';
import verifyPaymentChannelClaim from './verifyPaymentChannelClaim';
import { xrpToDrops, dropsToXrp } from './xrpConversion';
declare function isValidSecret(secret: string): boolean;
declare function encode(object: Transaction | LedgerEntry): string;
declare function encodeForSigning(object: Transaction): string;
declare function encodeForSigningClaim(object: PaymentChannelClaim): string;
declare function encodeForMultiSigning(object: Transaction, signer: string): string;
declare function decode(hex: string): Record<string, unknown>;
declare function isValidAddress(address: string): boolean;
declare function convertStringToHex(string: string): string;
declare function convertHexToString(hex: string, encoding?: BufferEncoding): string;
declare function hasNextPage(response: Response): boolean;
declare const hashes: {
    hashSignedTx: typeof hashSignedTx;
    hashTx: typeof hashTx;
    hashAccountRoot: typeof hashAccountRoot;
    hashSignerListId: typeof hashSignerListId;
    hashOfferId: typeof hashOfferId;
    hashTrustline: typeof hashTrustline;
    hashTxTree: typeof hashTxTree;
    hashStateTree: typeof hashStateTree;
    hashLedger: typeof hashLedger;
    hashLedgerHeader: typeof hashLedgerHeader;
    hashEscrow: typeof hashEscrow;
    hashPaymentChannel: typeof hashPaymentChannel;
};
export { getBalanceChanges, dropsToXrp, xrpToDrops, hasNextPage, rippleTimeToISOTime, isoTimeToRippleTime, rippleTimeToUnixTime, unixTimeToRippleTime, percentToQuality, decimalToQuality, percentToTransferRate, decimalToTransferRate, transferRateToDecimal, qualityToDecimal, isValidSecret, isValidAddress, hashes, deriveKeypair, deriveXAddress, signPaymentChannelClaim, verifyPaymentChannelClaim, convertStringToHex, convertHexToString, classicAddressToXAddress, xAddressToClassicAddress, isValidXAddress, isValidClassicAddress, encodeSeed, decodeSeed, encodeAccountID, decodeAccountID, encodeNodePublic, decodeNodePublic, encodeAccountPublic, decodeAccountPublic, encodeXAddress, decodeXAddress, encode, decode, encodeForMultiSigning, encodeForSigning, encodeForSigningClaim, };
//# sourceMappingURL=index.d.ts.map