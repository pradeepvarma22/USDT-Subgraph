import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function User() {
    const [data, setData] = useState([]);
    const router = useRouter()
    const { id } = router.query

    let result;

    async function getData() {
        console.log(id);
        result = await axios.post(
            "https://api.thegraph.com/subgraphs/name/pradeepvarma22/usdt",
            {
                query: `    
                {
                    userAccounts(where: {address: "${id}"}){
                      address
                      transaction {
                          id
                          from
                          to
                          tokenType
                          transactionType
                        }
                    }
                }
            `
            }
        );

        console.log(result.data.data.userAccounts[0].transaction);
        setData(result.data.data.userAccounts[0].transaction);
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            Transactions Done By user:
            <br />



            <div className="p-5">
                <>



                            {data.map(function (d) {

                                return (

                                    <div key={d.id}>



                                                <p>{d.from}</p>
                                
                                

                                                    <p>{d.from}</p>
                                                    <p>{d.to}</p>
                                                    <p>{d.tokenType}</p>
                                                    <p>{d.transactionType}</p>



                                </div>




                                )


                            })}





                </>
            </div>







        </div>
    )
}