# USDT-Subgraph


Deployed:
<a href="https://thegraph.com/hosted-service/subgraph/pradeepvarma22/usdt">https://thegraph.com/hosted-service/subgraph/pradeepvarma22/usdt</a>


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
  transactions(
    first: 15
  	where: {tokenType: ERC20}
  ) {
    id
    from
    to
    value
    tokenType
    transactionType
  }
}
</pre>