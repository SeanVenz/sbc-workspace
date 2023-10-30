import * as Web3 from '@solana/web3.js';
import base58 from 'bs58';

async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const publicKey = new Web3.PublicKey('4spmH3EniPoR57szbmXGDb2nW4wW2t4ipa8x6CvvF93m');
    const base58DecodedPK = base58.decode('2Xui4ZSPyGUYMQWnronf6j7jwFLnLup8dbe2dH1fgPrHZ1FArPD274JDcSCBsyVRMNPfvEqPemxzNZe41BLeCiLf');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);
    const programId = new Web3.PublicKey('G3QrQ1JmrFhRDZyruxp84HH1WWjAmp74PFkFGWSjSYpU');
    
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publicKey,
                isSigner: true,
                isWritable: false,
            }   
        ],
        data: Buffer.alloc(20),
        programId: programId
    });

    const signature = await Web3.sendAndConfirmTransaction(
        connection,
        new Web3.Transaction().add(instruction),
        [signer] 
    );

    console.log('Transaction Signature:', signature);
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
