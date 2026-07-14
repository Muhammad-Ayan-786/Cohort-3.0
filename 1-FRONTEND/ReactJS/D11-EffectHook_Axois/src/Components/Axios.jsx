import { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
  const [apiData, setApiData] = useState(null)

  const getData = async () => {
    let { data } = await axios.get('https://fakestoreapi.com/products')
    setApiData(data)
    console.log(data)

  }

  /* getData()
  If u call is globally, it will go in loop. Like :

  apiData = useState(null)

  Func getData() {
    ...
    setApiData(data)
  }

  getData() -
     This will call getData() , & getData func sets api-data in setApiData func and setFunc re-render Axios functional component again. Then the whole process goes on and on. So instead of calling it globally, call it inside useEffect()
  */

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="border-4 border-purple-800 bg-purple-400 p-4 rounded-xl font-bold text-xl uppercase tracking-wide mt-6">
      <h1>Axios for API Calls</h1>
    </div>
  )
}

export default Axios