import {getConexion} from '../db/db.js'

export const verTurnos = async (req,res) =>{
    try {
        let conexion = await getConexion()
        let result = await conexion.query('select * from turnos')
        res.json(result[0])
    } catch (error) {
        console.log(error);
    }
}
export const nuevoTurno = async (req,res) => {
    try {
        let conexion = await getConexion()
        let {nombre,dia,hora} = req.body
        let turno = {nombre,dia,hora}
        let result = await conexion.query('insert into turnos set ?',turno)
        res.json('Turno agendado!')
    } catch (error) {
        console.log(error);
    }
}