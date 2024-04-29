import React from 'react'
import Link from 'next/link'

export const ErrorComponent = () => {
  return (
    <div className='error__component'>
        <h1>No se encontró información del la competencia</h1>
        <Link href={'/'}>VOLVER</Link>
    </div>
  )
}
