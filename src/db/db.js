import mysql2 from 'mysql2/promise'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../config.js'

const conexion = mysql2.createConnection({
    host:DB_HOST,
    database:DB_NAME,
    user:DB_USER,
    password:DB_PASSWORD,
    port: DB_PORT
})

export const getConexion = ( ) => {
    return conexion
}