import React from 'react'
import "./ItemContainer.css";

const ItemContainer = ({txtsaludo}) => {
  return (
    <div className='saludo'>{txtsaludo}</div>
  )
}

export default ItemContainer