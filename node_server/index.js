const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
var id = req.query.level;
console.log(id)
res.send(id)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

