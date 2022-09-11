import React from 'react'

const MostrarConversion = ({ libras, conversion, unidad }) => {
    return (
        <>
            <h3 style={{marginTop: '1em'}}>{libras} lb equivalen a {conversion} {unidad}</h3>
        </>
    )
}

export default MostrarConversion