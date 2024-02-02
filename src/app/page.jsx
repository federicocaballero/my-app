'use client'
import ProductForm from '@/components/ProductForm';
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
    <div>
      <h1>Resultados de la Consulta</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            ID: {producto.id}, Nombre: {producto.nombre}, Precio: {producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
