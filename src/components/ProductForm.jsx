'use client'
import React, { Component } from 'react'

export default class ProductForm extends Component {
  render() {
    return (
      <form className='bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4'>
        <label htmlFor="name"
        className='block text-gray-700 text-sm font-bold mb-2'>Product Name</label>
        <input type="text" placeholder='name'
        className='shadow appearance-none border rounded w-full py-2 px-3' />

        <label htmlFor="price"
        className='block text-gray-700 text-sm font-bold mb-2 mt-2'>Precio</label>
        <input type="text" placeholder='00.00'
        className='shadow appearance-none border rounded w-full py-2 px-3' />
        
        <label htmlFor="description"
        className='block text-gray-700 text-sm font-bold mb-2 mt-2'>Descripcion del producto</label>
        <input type="text" placeholder='Description'
        className='shadow appearance-none border rounded w-full py-2 px-3' />


      </form>



    )
  }
}
