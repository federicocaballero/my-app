import mysql from "serverless-mysql";

export const conexion = mysql({
    config:{
        host: 'localhost',
        user: 'root',
        password: '1234',
        port: '3306',
        database: 'qrproject_db'
    }
})