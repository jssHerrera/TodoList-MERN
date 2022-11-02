import {createPool}  from 'mysql2/promise'  ;
// https://www.npmjs.com/package/mysql2
import {
  DB_PORT,
  DB_BATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
}from './config.js'


export const pool = createPool ({
  host : DB_HOST ,
  user: DB_USER ,
  password: DB_PASSWORD,
  port: DB_PORT,
  database : DB_BATABASE
})


// import {createPool}  from 'mysql2/promise'  ;
// https://www.npmjs.com/package/mysql2

