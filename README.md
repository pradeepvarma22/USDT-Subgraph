# USDT Subgraph
Dynamic UserPage Subgraph


Subgraph Deployed At:
<a href="https://thegraph.com/hosted-service/subgraph/pradeepvarma22/usdt">https://thegraph.com/hosted-service/subgraph/pradeepvarma22/usdt</a>


App Url:<a href="https://usdt-subgraph.vercel.app/">
https://usdt-subgraph.vercel.app</a>



<br/>

## Images
<img src="./assets/1.png" />
<br/>
<img src="./assets/2.png">
<br/>
<img src="./assets/3.png"/>
<br/>
##### Ex Query:
<pre>
{
  userAccounts(
    first: 15
  ) {
    id
    address
    transaction( 
    	where: {tokenType: ERC20}
    ) {
      id
      tokenType
      transactionType
    }
  }
}
</pre>
