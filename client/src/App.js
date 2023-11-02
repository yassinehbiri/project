import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import NavUser from './Components/NavUser';
import Profile from './Components/Profile';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import Errors from './Components/Errors';
import ListUsers from './Components/ListUsers';
import EditUser from './Components/EditUser';
import EditProfile from './Components/EditProfile';
import ListPosts from './Components/ListPosts';
import AddPost from './Components/Posts/AddPost';
import { ChakraProvider } from '@chakra-ui/react'
import DescriptionPost from './Components/DescriptionPost';
import EditPost from './Components/Posts/EditPost';
import MyPosts from './Components/Posts/MyPosts';

function App() {
  return (
    <ChakraProvider>
    <div>
      <NavUser/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/Profile" element ={<PrivateRoute> <Profile/></PrivateRoute>} />
        <Route path="/Register" element ={<Register/>}/>
        <Route path="/Login" element ={<Login/>} />
        <Route path="/ListUsers" element ={<ListUsers/>}/>
        <Route path="/updateUser/:id" element ={<EditUser/>}/>
        <Route path="/updateProfile" element ={<EditProfile/>}/>
        <Route path="/AddPost" element ={<AddPost/>}/>

        <Route path="/ListPost" element ={<ListPosts/>}/>
        <Route path="/DescriptionPost/:id" element ={<DescriptionPost/>}/>
        <Route path="/EditPost/:id" element ={<EditPost/>}/>
        <Route path="/MyPosts" element ={<MyPosts/>}/>



      </Routes>
      <Errors/>
 {/* <Footer/> */}
    </div>
    </ChakraProvider>

  );
}

export default App;
