'use client'
import ProductCard from '@/components/ProductCard';
import React from 'react';

import { useEffect, useState } from 'react';

const HomePage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const respuesta = await fetch('./api/products');
        const datos = await respuesta.json();
        setProductos(datos.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }

    obtenerDatos();
  }, []);

  return (
    productos.map((producto) => {
      console.log(producto.estado)
      if (producto.estado == 1 ){
        return <ProductCard datosProducto = {producto}/>
     }
     
    })
  );
}

export default HomePage;
