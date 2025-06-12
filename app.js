import express from 'express'

const app = express()

import {PORT} from './config/env.js'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import connectToDatabase from './database/mongodb.js'


app.get('/',(req,res)=>{
    res.send("hi i am subscription api")
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/subscription', subscriptionRouter)


app.listen(PORT,()=>{
    console.log(`server is running on localhost:${PORT}`)
    connectToDatabase()
})
