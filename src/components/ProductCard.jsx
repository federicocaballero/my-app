'use client'
import { useState } from "react";


const ProductCard = (props) =>{
  const [mostrar, setMostrar] = useState(false);

  return(
    
    <>
      {/* CONTENEDOR PRINCIPAL */}
      <div className="shadow-md bg-info uppercase mt-2 ms-1 me-1 mb-2 rounded-lg overflow-hidden grid grid-cols-5 container-principal" onclick="mostrarMas()">
        {/* CONTENIDO */}
        <div className="col-span-3 p-3 flex flex-col justify-around align-center">
         
          {props.datosProducto.etiqueta && (
            <button class="rounded-full uppercase bg-amber-400 color-black btn-style">
            {props.datosProducto.etiqueta}
          </button>
          
          )}
          <h2 className="text-xl font-bold ">{props.datosProducto.nombre}</h2>
          <p className=" limitar-lineas text-gray-400 ">{props.datosProducto.descripcion}</p>
          
          <span class="text-xl font-bold "> 
          <button onClick={() => setMostrar(!mostrar)} className="uppercase" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            ver mas
          </button>       
          </span>
          
          <p className="text-xl font-bold">${props.datosProducto.precio}</p>
        </div>
        
        {/* IMAGEN */}
        <div className="col-span-2 pe-2 container-card-img flex">
          <img className="card-img col-span-2" src={props.datosProducto.imagen} alt="Popular Temple Scottish Pinta" />
        </div>    
     </div>
    </>
  )


}

export default ProductCard;