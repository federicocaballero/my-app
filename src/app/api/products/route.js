// aca van a estar las funciones GET y POST para
// realizar las operaciones HTTP con la base de datos

import { NextResponse } from "next/server";
import {conexion} from "@/libs/db"; //Traigo la conexion de la carpeta que la contiene

export async function GET(){
try {
        const result = await conexion.query('SELECT * FROM producto');
        return NextResponse.json({ data: result });    
    } catch (error) {
        return NextResponse.json({
            message: error.message,
         }, 
         {
            status: 500
         })
    }
}