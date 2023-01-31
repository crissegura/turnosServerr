import Router from 'express'
import { verTurnos,nuevoTurno, cancelarTurno } from '../controles/controles.js'


const route = Router()

route.get('/api',(req,res)=>{
    res.json('AppTurnos Server...')
})
route.get('/verturnos',verTurnos)
route.post('/nuevoturno', nuevoTurno)
route.delete('/cancelarturno/:nombre',cancelarTurno)

export default route;