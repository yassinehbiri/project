import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../Redux/Actions/AuthActions"
import CardUser from "./CardUser"

const ListUsers = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    const users = useSelector(state=>state.AuthReducer.users)
  return (
      <div className=" bg-light ListPage">

        
    <div className="ListStyle">
        {
           users && users.map( (el) => <CardUser el={el}/>)
        }

    </div>
    </div>
  )
}

export default ListUsers

