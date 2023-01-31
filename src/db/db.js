import mysql2 from 'mysql2/promise'

const conexion = mysql2.createConnection({
    host:'localhost',
    database:'barberia',
    user:'root',
    password:'crisadmin'
})

export const getConexion = ( ) => {
    return conexion
}