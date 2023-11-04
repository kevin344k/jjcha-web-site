/*that file is for start server nothing more*/ 
const express=require('express')
const app=express()
const PORT = process.env.PORT || 3000

app.use(express.static('src/public'))

app.get('/',(req,res)=>{
  res.sendFile(index.html)
})

app.listen(PORT,()=>{
  console.log(`server listen on port ${PORT}`)
})

