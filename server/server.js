const express = require ('express')
const cors= require('cors')

const app = express()

app.use(express.json())
app.use(cors)

app.listen(4000, 'localhost', ()=>{
    console.log ('server started succesfully...')
})