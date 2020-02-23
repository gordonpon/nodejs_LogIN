const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
]

const express = require('express')
const exHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000

const app = express()
app.engine('handlebars', exHandlebars({default: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=> {
    res.render('index')
})

//取得網頁傳出資料
app.post('/', (req, res) => {
    const email = req.body.txbEmail.trim()
    const password = req.body.txbPassword.trim()

    if(email ==="" || password === '')
    {
        res.render('index', {email, password, message: '欄位不得為空白'})
        return false
    }

    const result = users.find((user) => (user.email === email) && (user.password === password))
    if (result) {
        res.render('show', { name: result.firstName })
    }else {
        res.render('index', { email, message: '信箱或密碼錯誤' })
    }

})
//設定監聽
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})