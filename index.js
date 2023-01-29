const bodyParser = require('body-parser')
const express = require('express')
const {default : mongoose } = require('mongoose')
const app = express()

const PORT = 8081;
const MONGO_URI = "mongodb://127.0.0.1:27017/xharktank";

//Routers
const pitchRouter = require('./routes/pitch')

//Connect mongoose
 mongoose.connect(MONGO_URI,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
},err => {
    if(err)
     console.log(err)
})

app.use(bodyParser.json())
app.use('/pitches',pitchRouter)


app.get('/',(req,res)=>{
    res.send('XharkTank App')
})

app.listen(PORT,()=> console.log(`Listening on port: ${PORT}`))