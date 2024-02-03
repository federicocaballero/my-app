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
        console.error('Error al obtener los datossss:', error);
      }
    }

    obtenerDatos();
  }, []);

  return (
    productos.map((producto) => {
     return <ProductCard datosProducto = {producto}/>
    })
  );
}

export default HomePage;
