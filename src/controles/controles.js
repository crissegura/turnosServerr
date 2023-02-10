import {getConexion} from '../db/db.js'

export const verPrecios = async (req,res) =>{
    try {
        let conexion = await getConexion()
        let result = await conexion.query('select * from precios')
        res.json(result[0])
    } catch (error) {
        console.log(error);
    }
}
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
export const cancelarTurno = async (req,res) => {
    try {
        let conexion = await getConexion()
        let {nombre} = req.params
        let result = await conexion.query('DELETE FROM turnos WHERE nombre = ?;',nombre)
        res.json('Turno cancelado')
    } catch (error) {
        console.log(error);
    }
}

export const usuarios = async (req, res) => {
    try {
        let conexion = await getConexion()
        let result = await conexion.query('select * from users')
        res.json(result[0])
    } catch (error) {
        console.log(error);
    }
}