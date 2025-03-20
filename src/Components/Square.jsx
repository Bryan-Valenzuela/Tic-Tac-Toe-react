import React from 'react'

export const Square = ({children, isSelected, updateBoard, index}) => {
  
    //asignamos el estilo correspondiente
    const className = `square ${isSelected ? 'is-selected' : ''}` 

    //actulizamos el tablero
    const handelClick = () => {
        updateBoard(index)
    }

  return (
    <div onClick={handelClick} className={className}>
        {children}
    </div>
  )
}