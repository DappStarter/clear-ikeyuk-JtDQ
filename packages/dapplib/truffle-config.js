require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone story remember nominee concert hen light army gentle'; 
let testAccounts = [
"0xdde217acc000e59c29631301b8ffebe5a6836d596af8547f22a33238d537dee5",
"0xc8020867ab4711cb45968b9efbddd4ac5b0289ce07d05705d41f05a1dd76929a",
"0x6dce4d70294242495d35d0c9d6bae9d961bec5edfb2077917ef00f543f5dc523",
"0x22c21f1a5abb10f286b2fcaf376e1d0ff23d201e1d491e3c14e2724b0693b264",
"0xe2614bab0023c70f217d8471a3c5eb8d33f66d9537072c9a69902bdd46666fe7",
"0xd3867419d0ee4270f3bf3a86888555343237dffe27ec10fa98a7572b368c531c",
"0x52b465b48fe87b22ba1bc0384e93af06a4c78851fb9ae37493e31e8115bd2a9c",
"0x9b0afcc8873b29fc5d70586637f68076304967ffe97cdf3297595a74337a0cac",
"0x5a0ea8c7508e7c7fe8fbd5e881c2a4894b883e9a2928848d8593dddf3d06b717",
"0x70331e0c6ce4c37dc5dce6aa9527eab62a8c78489e1ce196393ee7832f73b869"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

