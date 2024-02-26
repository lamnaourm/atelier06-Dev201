import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import actorRoute from './routes/actors.js'
import directorRoute from './routes/directors.js'
import movieRoute from './routes/movies.js'

dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.PORT || 3000
const url = `${process.env.URL_MONGOOSE}/${process.env.DBNAME}`


mongoose.connect(url).then(() => { console.log('Connect to Nongo')})
.catch((err) => { console.log('Unbale to conenct to Mongo')})

app.use('/actor', actorRoute)
app.use('/director', directorRoute)
app.use('/movie', movieRoute)

app.listen(port, (error) => {
    if(!error)
        console.log('Server started')
    else 
        console.log('Unable to start server')
})