import {pool} from '../conexion.js'
export const ping = async (req, res)=>{
  const [respuesta] = await pool.query("SELECT 1 + 1 AS resultado")
  res.send(respuesta)
}
