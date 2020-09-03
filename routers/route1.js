const express=require('express');
const router =express.Router()
const Address =require('../models/address')

router.get('/',async(req,res)=>{
    try{
     const user =await Address.find()
     res.json(user)
    }catch(err){
        res.send('error',+err)
    }

})

//retrieve a single user detail by id
router.get('/:id', async(req,res) => {
    try{
     const user1 =await Address.findById(req.params.id)
     res.json(user1)
    }catch(err){
        res.send('error',+err)
    }

})

router.post('/',async(req,res)=>{
    const users =new Address({
        address: req.body.address,
        pincode:  req.body.pincode,
        userid:   req.body.userid,
    })
    try{
        const a1 = await users.save()
        res.json(a1)
    }catch(err){
        res.send('error',err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const users = await Address.findById(req.params.id)
        user.pincode = req.body.pincode
        const a1 =await users.save()
        res.json(a1)
    }catch(err){
        res.send('error')
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const users =await Address.findByIdAndRemove(req.params.id)
        res.json('deleted')
    }catch(err){
        res.send('error')
    }
})


module.exports = router