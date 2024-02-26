import express from "express";
import actor from '../models/Actor.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    actor.find({}).then((actors) => {
        res.json(actors)
    }).catch((err) => {
        res.sendStatus(520)
    })

})

routes.get('/names', (req, res) => {
    
})

routes.get('/movies', (req, res) => {
    
})

routes.post('/add', (req, res) => {
    
})

routes.put('/update/:name', (req, res) => {
    
})

routes.delete('/delete/:name', (req, res) => {
    
})

export default routes