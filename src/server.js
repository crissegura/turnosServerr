import express,{json} from "express";
import cors from 'cors'
import route from "./rutas/rutas.js";


const app = express()

app.use(json())
app.use(cors())
app.use(route)

const PORT = 3001

app.listen(PORT,()=>{
    console.log(`Servidor corriendo http://localhost:${PORT} `)
})