import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('2Xui4ZSPyGUYMQWnronf6j7jwFLnLup8dbe2dH1fgPrHZ1FArPD274JDcSCBsyVRMNPfvEqPemxzNZe41BLeCiLf');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('wyUxEZr7QT7wup26T3hQkfRWWagJwPMHVSiFhN3WNpU'), //mint  (created token mint on step 1)
        new Web3.PublicKey('EsZZYMENEQfhkYxEtLwsyB2pUGVcq6nGGHT2JWKLQbx6'), //owner or ang sendan sa token (created in step 2)
        new Web3.PublicKey('4spmH3EniPoR57szbmXGDb2nW4wW2t4ipa8x6CvvF93m'), //authority (the owner or the authority set on step 1)
        10000000000000, //
    )
    console.log('mint Token ', mintToken)

}
main()