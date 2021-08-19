require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name return night million good kangaroo army gift'; 
let testAccounts = [
"0xcb04925a2db9c4a56dfe2cee5b4bc37c89c595fdf7802210cbc19552e429823a",
"0x0d4891c252dce9bc32a61b14db6d3a1b7417e1ba763df9af89822c3b764b484b",
"0xb667ccd5a1495b4f78f901f96b5ff07c605450827aec9434d717ab231ead20d1",
"0xee1713639ec3ff9c122ae409dc6bba4687283f1d9245fed04dfb89e43ec4a48d",
"0x7a2cac91ac410f3d916320217bf99908366e6dda97413cf3511ee59abafa20b4",
"0x232c9e4dc7fef1970f913451dcb6c55b8ff95e2929b3b40df2f3f37cd7821297",
"0xb29ca8885e6a5167ea4737503c09d24b606cd78ef6a4f192398d326804a6fec4",
"0x6ed0a11c49512ce589e72a9ac110603563af71f8c262f3a8c5910bb436d4b600",
"0x73f977d5d2f6aa433232f3fcaff2691948663aa54b4a6bb7de6b066bd2b3c584",
"0x0dce4d8cb192b581ff42ebc4a60c51dceb195351ccece103e91e4b13bedeaacc"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

