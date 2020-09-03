const express=require('express');
const router =express.Router()
const User =require('../models/alien')

router.get('/',async(req,res)=>{
    try{
     const user =await User.find()
     res.json(user)
    }catch(err){
        res.send('error',+err)
    }

})

//retrieve a single user detail by id
router.get('/:id', async(req,res) => {
    try{
     const user1 =await User.findById(req.params.id)
     res.json(user1)
    }catch(err){
        res.send('error',+err)
    }

})

router.post('/',async(req,res)=>{
    const user =new User({
        firstname: req.body.firstname,
        lastname:  req.body.lastname,
        email:     req.body.email,
        password:  req.body.password
    })
    try{
        const a1 = await user.save()
        res.json(a1)
    }catch(err){
        res.send('error',err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        user.password = req.body.password
        const a1 =await user.save()
        res.json(a1)
    }catch(err){
        res.send('error')
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const user =await User.findByIdAndRemove(req.params.id)
        res.json('deleted')
    }catch(err){
        res.send('error')
    }
})
module.exports = router