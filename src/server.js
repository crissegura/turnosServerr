import express,{json} from "express";
import cors from 'cors'
import route from "./rutas/rutas.js";


const app = express()

app.use(json())
app.use(cors())
app.use(route)

app.listen(3001,()=>{
    console.log('Servidor corriendo http://localhost:3001')
})