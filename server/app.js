require("dotenv").config()
const app = require("express")()

const PORT = 8000

app.get('/', (req, res)=>{
    res.send(`<h1>Welcome ${process.env.ICE} </h1>`)
})

app.listen(PORT, ()=> console.log(`The app is running on port : ${PORT}`))
