import express from 'express'

const app = express()


app.get('/',(req,res)=>{
    res.send("hi i am subscription api")
})


app.listen(3000,()=>{
    console.log('server is running on localhost:3000')
})
