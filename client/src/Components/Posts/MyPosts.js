import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../../Redux/Actions/AuthActions"
import { getMyPosts } from "../../Redux/Actions/PostActions"
import CardPost from "../CardPost"


const MyPosts=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])

    const user = useSelector(state=>state.AuthReducer.user)

    useEffect(()=>{
        dispatch(getMyPosts(user?._id))
      },[user])

      const myposts = useSelector(state=> state.PostReducer.myposts)
    return(
        <div className="ListStyle">
            {
                (myposts&&user) && myposts.map(el=> <CardPost el={el}/>)
                
            }
        </div>
    )
}

export default MyPosts