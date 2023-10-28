import * as Web3 from '@solana/web3.js';

export async function getBalance(){
    const publicKey = new Web3.PublicKey('4spmH3EniPoR57szbmXGDb2nW4wW2t4ipa8x6CvvF93m');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const balance = await connection.getBalance(publicKey);
    console.log('Your SOL balance is: ', balance);
}