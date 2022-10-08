import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react'

export default function Home() {

  const [data, setData] = useState([]);


  let result;
  async function getData() {
    result = await axios.post(
      "https://api.thegraph.com/subgraphs/name/pradeepvarma22/usdt",
      {
        query: `
        {
          userAccounts(first:50){
            address
          }
        }
        `
      }
    );

    console.log(result.data.data.userAccounts);
    setData(result.data.data.userAccounts);
  }

  useEffect(() => {
    getData();
  }, [])



  return (
    <div>
      <div>
        <center>
          <h1 className='text-xl p-10'>Users List Click on Any User: {data.length}</h1>
        </center>
        <br />
        <br />
        <>
          <div className="flex items-center w-screen min-h-screen">
            <div className="container ml-auto mr-auto flex flex-wrap gap-10 items-start">


              {data.map(function (d) {

                return (

                  <div key={d.id}>
                    <Link href={`/user/${d.address}`}>
                      <div className="px-4 py-3 w-max bg-white shadow-md rounded-xl duration-500 hover:scale-105  hover:shadow-xl">

                        <img
                          src={`https://picsum.photos/1024/1024?nocache=${d.id}`}
                          alt="Product"
                          className="h-80 w-72 object-cover rounded-t-xl"
                        />
                        <div className="px-4 py-3 w-72">
                          <span className="text-gray-400 mr-3 text-xs"></span>
                          <p className="text-lg font-semibold text-black truncate"></p>
                          <div className="flex items-center">
                          </div>

                          <p className='truncate'>{d.address}</p>

                        </div>

                      </div>
                    </Link>



                  </div>



                )


              })}
            </div>
          </div>



        </>






      </div>
    </div >
  )
}
