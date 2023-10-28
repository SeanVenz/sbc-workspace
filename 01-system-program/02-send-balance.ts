import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

export async function sendBalance() {

    const web3 = require('@solana/web3.js');

    const decoded = base58.decode('2Xui4ZSPyGUYMQWnronf6j7jwFLnLup8dbe2dH1fgPrHZ1FArPD274JDcSCBsyVRMNPfvEqPemxzNZe41BLeCiLf')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('4spmH3EniPoR57szbmXGDb2nW4wW2t4ipa8x6CvvF93m');
    const publicKeyTo = new Web3.PublicKey('CdLJ7zi6LvSKhEXN74fiMXmbp4zMf6FsocfzQJ3PHDpa');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}