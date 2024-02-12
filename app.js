import express from 'express'
import cors from 'cors'
import books from './books.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/catalogue', (req, res) => {
    res.status(207).json(books);
})

app.get('/livre/:id', (req, res) => {
    const id = req.params.id;
    if(books.filter(e => e.id == id).length  == 0)
        res.status(404).send('Id de livre Incorrect')
    else 
        res.status(201).json(books.filter(e => e.id == id))
})

app.post('/livre', (req, res) => {

})

app.put('/livre', (req, res) => {
    
})

app.delete('/livre', (req, res) => {
    
})

app.listen(3000, (err) => {
    if(!err)
        console.log('Server started')
    else 
        console.log('Server not started')
})