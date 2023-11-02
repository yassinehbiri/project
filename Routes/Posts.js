const express = require('express');
const Posts = require('../Models/Posts');

const postRouter = express.Router()

//Add post
postRouter.post('/addPost',async(req,res)=>{

    try {   
        console.log(req.body)
        const now = new Date(Date.now());
        const newPost = new Posts({...req.body,date : now.toLocaleString()})
        await newPost.save()
        res.status(200).send({msg:"Post added successfully",newPost})
        
        
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not Add Post"}]})
    }

})

// read all posts
postRouter.get('/getPost',async(req,res) => {

    try {
        const allPosts =  await Posts.find().populate('owner')
        res.status(200).send({msg:"All posts",allPosts})
        
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not read Posts"}]})
    }
})

// read one post

postRouter.get('/getOnePost/:id',async(req,res) => {

    try {
        const {id} = req.params
        const onePost = await Posts.findById(id).populate('owner')
        res.status(200).send({msg:"one posts",onePost})
        
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not read one post"}]})
    }
})

// Update  post
postRouter.put('/updatePost/:id',async(req,res) => {
    try {
        const {id}= req.params
        const now = new Date(Date.now());
        const updatePost = await Posts.findByIdAndUpdate(id,{$set : {...req.body,date:now.toLocaleString()}})
        
        res.status(200).send({msg:"Update post",updatePost})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not update post"}]})
    }
})


// delete  post

postRouter.delete('/deletePost/:id',async(req,res)=>{
    const {id}= req.params

    try {

        
        await Posts.findByIdAndDelete(id)
        res.status(200).send({ msg: 'Post deleted' });
        
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not delete post"}]})
    }
})


postRouter.get('/getMyPosts/:id',async (req, res) => {
    try {
        const {id} = req.params
        const Allposts = await Posts.find({owner : id}).populate('owner')

        res.status(200).send({ msg: 'My Posts ', Allposts })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get my posts' })

    }
})



module.exports=postRouter;