import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'

const App = () => {

    let [data, setdata] = useState([])

    useEffect(() => {
        let func = async function () {
            let api_data = await fetch('https://dummyjson.com/products')
                .then(res => res.json())
            console.log(api_data)
            setdata(api_data.products)
        }
        func()
    }

        , [])

    let deletecard = function (index) {
        let newdata = [...data]
        newdata.splice(index, 1)
        setdata(newdata)
    }
    return (
        <div>

            {data.map((item, i) => {
                return <div key={i} className='border border-2 border-success  py-5'>
                    <h1>brand name:{item.brand}</h1>
                    <h2>price:{item.price}</h2>
                    <img src={item.thumbnail} alt="" />
                    <div className="w-50 text-end mt-4 "><button onClick={(() => deletecard(i))} className='btn btn-danger'>delete</button></div>

                </div>
            })}



        </div>
    )
}

export default App
