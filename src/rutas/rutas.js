import Router from 'express'
import { verTurnos,nuevoTurno } from '../controles/controles.js'


const route = Router()

route.get('/api',(req,res)=>{
    res.json('AppTurnos Server...')
})
route.get('/verturnos',verTurnos)
route.post('/nuevoturno', nuevoTurno)

export default route;