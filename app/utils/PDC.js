import { EThree, KeyPairType } from '@virgilsecurity/e3kit-browser';

const eThreePromise = EThree.initialize(tokenCallback, {
    keyPairType: KeyPairType.CURVE25519_ROUND5_ED25519_FALCON,
  });

const eThree = await eThreePromise;