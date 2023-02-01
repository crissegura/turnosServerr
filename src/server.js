import express,{json} from "express";
import cors from 'cors'
import route from "./rutas/rutas.js";
import { PORT } from "./config.js";



const app = express()

app.use(json())
app.use(cors())
app.use(route)

app.listen(PORT,()=>{
    console.log(`Servidor corriendo http://localhost:${PORT}`)
})