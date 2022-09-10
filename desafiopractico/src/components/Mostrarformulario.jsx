import React from 'react'

const Mostrarformulario = ({nombre, apellido, dui, nacionalidad, direccion, municipio, departamento}) => {
    return (
        <>
            <div className="list">
                <h2>Nombre: </h2>
                <h3>{nombre}</h3>
                <h2>Apellido: </h2>
                <h3>{apellido}</h3>
                <h2>Dui: </h2>
                <h3>{dui}</h3>
                <h2>Nacionalidad: </h2>
                <h3>{nacionalidad}</h3>
                <h2>Direccion: </h2>
                <h3>{direccion}</h3>
                <h2>Municipio: </h2>
                <h3>{municipio}</h3>
                <h2>Departamento: </h2>
                <h3>{departamento}</h3>
            </div>
        </>
    )
}

export default Mostrarformulario