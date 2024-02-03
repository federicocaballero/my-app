'use client'
const ProductCard = (props) =>{
  return(
    <>
      <div className="shadow-md uppercase bg-white mt-2 ms-1 me-1 mb-2 rounded-lg overflow-hidden grid grid-cols-5" onclick="mostrarMas()">
      <div className=" col-span-3 p-4 bg-black flex flex-col justify-center">
      
        <button class="rounded-full uppercase bg-amber-400 color-black w-2/4"> 
          {props.datosProducto.etiqueta}
        </button>
        <h2 className="text-xl font-bold ">{props.datosProducto.nombre}</h2>
        <p className=" limitar-lineas text-gray-500 ">{props.datosProducto.descripcion}</p>
        <span class="text-gray-500">...</span>
        <p className="text-xl font-bold text-red-500 ">${props.datosProducto.precio}</p>
       </div>
       <div className="col-span-2 container-card-img flex">
         <img className="card-img col-span-2" src={props.datosProducto.imagen} alt="Popular Temple Scottish Pinta" />
        </div>   
       
     </div>
    </>
  )
}

export default ProductCard;