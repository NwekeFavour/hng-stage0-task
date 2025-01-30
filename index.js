const express = require("express")
const app =express()
const port = 3000 || process.env.PORT
const cors = require("cors")

app.use(cors())

app.get('/api', (req,res) => {
    const date = new Date()
    console.log(date)
    const userData = {
        "email" : "nwekefavour1315@gmail.com",
        "current_datetime": date,
        "github_url": "https://github.com/NwekeFavour/hng-stage0-task.git"
    }
    res.json(userData)
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
}) 