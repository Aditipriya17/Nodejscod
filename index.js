const ex = require('express')
let app = ex()

function abcd(req, res) {
    res.send('welcome')
}

app.get(
    '/users',
    abcd
)

app.listen(8080)