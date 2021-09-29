### MetaMask Handshake

Multistep process, basically:

1: POST: net_version  
&> response jsonrpc <br>
2: POST: eth_blockNumber   <br>
&> response jsonrpc <br>
3: GET: EtherScan Account TxList CHECK   <br>
&> response json <br>
&> EtherScan Response: `no transactions found`   <br>
4: POST: eth_chainId   <br>
&> response jsonrpc <br>
5: OPTIONS   <br>
&> response.OPTIONS HTTP <br>


```har
HTTP/1.1 200 OK
Server: nginx
Date: Wed, 29 Sep 2021 16:39:03 GMT
Content-Type: application/octet-stream
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization
```


```

Time	Response	Req. Size	Resp. Size	Analysis	Total time	Timing	
16:39:03.769	200	524	239	[JSON][OK][CACHE ??]	92 ms	
‡
POST https://api.sushirelay.com/mainnet/v1
16:39:03.371	200	510	240	[JSON][OK][CACHE ??]	292 ms	
‡
POST https://api.sushirelay.com/mainnet/v1
16:39:03.711	200	528	246	[JSON][OK][CACHE ??]	105 ms	
‡
POST https://api.sushirelay.com/mainnet/v1
16:38:58.167	200	—	449	[JSON][OK][RESP W][CACHE ??]	106 ms	
‡
GET https://api.etherscan.io/api
16:39:03.711	200	—	449	[JSON][OK][RESP W][CACHE ??]	101 ms	
‡
GET https://api.etherscan.io/api
16:39:03.072	200	—	—	[MIME][OK][RESP W][CACHE ??]	290 ms	
‡
OPTIONS https://api.sushirelay.com/mainnet/v1
