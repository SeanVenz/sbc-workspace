import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("4spmH3EniPoR57szbmXGDb2nW4wW2t4ipa8x6CvvF93m")
const decoded = base58.decode('2Xui4ZSPyGUYMQWnronf6j7jwFLnLup8dbe2dH1fgPrHZ1FArPD274JDcSCBsyVRMNPfvEqPemxzNZe41BLeCiLf')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();