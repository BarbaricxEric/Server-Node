import {Router} from 'express'

const router = Router()

router.get('/' , (req,res)=>{
    res.send({msg: 'Get All Persons'})
})


export default router