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

### Source

mainnet.infura.io_09-14-2021-14-02-17.har

https://eips.ethereum.org/EIPS/eip-695 - `net_version` is a fallback for `eth_chainId`, but eth_chainId is used for signing transactions while net_version can not
