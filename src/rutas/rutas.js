import Router from 'express'
import { verPrecios, verTurnos,nuevoTurno, cancelarTurno, usuarios, eliminarTurnosViejos } from '../controles/controles.js'


const route = Router()

route.get('/api',(req,res)=>{
    res.json('AppTurnos Server...')
})
route.get('/verprecios',verPrecios)
route.get('/verturnos',verTurnos)
route.post('/nuevoturno', nuevoTurno)
route.delete('/cancelarturno/:nombre',cancelarTurno)
route.delete('/elimiarturnosviejos/:id',eliminarTurnosViejos)
route.get('/ingresar',usuarios)

export default route;