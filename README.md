# minimal rpc exposed methods

> list of RPC methods a node must implement for a dapp to be usable

```
eth_Call.json
eth_ChainId.json
eth_GasPrice.json
eth_blockNumber.json
eth_getBlockByNumber.json
eth_getTransactionCount.json
eth_getTransactionReceipt.json
eth_protocolVersion.json - fallback
eth_sendRawTransaction.json
eth_sendTransaction_LEGACY.json
net_version.json - fallback
```

### Block Data
>These would not be affected, as it's not but block data:

```
genEthGetTransactionReceipt
genEthGetBlockByNumber
genEthBlockNumber
genEthGetTransactionByHash
genEthGetLogs
```

### Sstate Aata
> these should be improved by snapshot:
```
genEthCall
genEthGetBalance
genEthGetTransactionCount
genEthGetCode
```

## Additional 

`eth_signTypedData` [see eip712, https://eips.ethereum.org/EIPS/eip-712]


### Source

mainnet.infura.io_09-14-2021-14-02-17.har

https://eips.ethereum.org/EIPS/eip-695 - `net_version` is a fallback for `eth_chainId`, but eth_chainId is used for signing transactions while net_version can not

## Wallet Providers and RPC Endpoints

```js
  { walletName: "coinbase", preferred: true },
  { walletName: "trust", preferred: true, rpcUrl: RPC_URL },
  { walletName: "metamask", preferred: true },
  { walletName: "authereum" },
  {
    walletName: 'trezor',
    appUrl: APP_URL,
    email: CONTACT_EMAIL,
    rpcUrl: RPC_URL
  },
  {
    walletName: 'ledger',
    rpcUrl: RPC_URL
  },
  {
    walletName: 'lattice',
    rpcUrl: RPC_URL,
    appName: APP_NAME
  },
  {
    walletName: 'keepkey',
    rpcUrl: RPC_URL
  },
  {
    walletName: 'mewwallet',
    rpcUrl: RPC_URL
  },
  { 
    walletName: 'cobovault',
    rpcUrl: RPC_URL,
    appName: APP_NAME,
  },
  { 
    walletName: 'keystone',
    rpcUrl: RPC_URL,
    appName: APP_NAME,
  },
  {
    walletName: "fortmatic",
    apiKey: FORTMATIC_KEY,
    preferred: true
  },
  {
    walletName: "portis",
    apiKey: PORTIS_KEY,
    preferred: true,
    label: 'Login with Email'
  },
  {
    walletName: "walletConnect",
    infuraKey: INFURA_KEY
  },
  { walletName: "opera" },
  { walletName: "operaTouch" },
  { walletName: "torus" },
  { walletName: "status" },
  { walletName: "walletLink" rpcUrl: RPC_URL, appName: APP_NAME }
  { walletName: "imToken", rpcUrl: RPC_URL },
  { walletName: "meetone" },
  { walletName: "mykey", rpcUrl: RPC_URL },
  { walletName: "huobiwallet", rpcUrl: RPC_URL },
  { walletName: "hyperpay" },
  { walletName: "wallet.io", rpcUrl: RPC_URL },
  { walletName: "atoken" },
  { walletName: "frame" },
  { walletName: "ownbit" },
  { walletName: "alphawallet" },
  { walletName: "gnosis" },
  { walletName: "xdefi" },
  { walletName: "bitpie" },
  { walletName: "binance" }
  { walletName: "liquality" }
]
```
