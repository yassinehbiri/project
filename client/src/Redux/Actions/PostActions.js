import axios from "axios";
import { GET_MY_POSTS, GET_ONE_POST, GET_POSTS } from "../ActionTypes/PostTypes";

export const getAllPosts =() =>async(dispatch)=>{
    try {
        const res = await axios.get('/api/post/getPost/')
        dispatch({
            type: GET_POSTS,
            payload:res.data.allPosts
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const addPost =(newPost,navigate)=> async (dispatch)=>{
    try {
       
         await axios.post('/api/post/addPost',newPost)
        dispatch(
           getAllPosts()
            )
        navigate('/ListPost')
    } catch (error) {
            console.log(error)
        }
    }
    

    export const getOnePost = (id) => async (dispatch) => {

        
        try {
          const res = await axios.get(`/api/post/getOnePost/${id}`);
          dispatch({ type: GET_ONE_POST, payload: res.data.onePost });
        } catch (error) {
          console.log(error);
        }
      };

    

      export const updatePost =(upPost,id,navigate) =>async(dispatch) => {
        await axios.put(`/api/post/updatePost/${id}`,upPost)
     try {
          
         navigate(`/DescriptionPost/${id}`)
     
     
        } catch (error) {
          console.log(error);
        }

     }


     export const deletePost=(id,navigate)=> async (dispatch)=>{
   
      try {
  
          await axios.delete(`/api/post/deletePost/${id}`)
  
          dispatch(getAllPosts())
          navigate('/ListPost')
          
      } catch (error) {
          console.log(error)
      }
  }
     


  export const getMyPosts = (id) => async (dispatch) => {

        
    try {
      const res = await axios.get(`/api/post/getMyPosts/${id}`);
      dispatch({ type: GET_MY_POSTS, 
        payload: res.data.Allposts });
    } catch (error) {
      console.log(error);
    }
  };


  export const updateValid =(upPost,id,location,userID ) =>async(dispatch) => {
    
 try {
    await axios.put(`/api/post/updatePost/${id}`,upPost)
    if(location.pathname === "/ListPost"){
        dispatch(getAllPosts())
    }
    else{
        dispatch(getMyPosts(userID))
    }
    
 
    } catch (error) {
      console.log(error);
    }

 }
