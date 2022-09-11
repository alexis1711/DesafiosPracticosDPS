import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 

const Mostrarformulario = ({nombre, apellido, genero, dui, nacionalidad, direccion, municipio, departamento, fechaNacimiento}) => {
    if(nombre == null){
        return(<>
            <h1>Todavia no ha ingresado paciente</h1>
        </>)
    }else{
        return (
            <>
                <div className="list">
                    <br/>
                    
                    <h1>DATOS INGRESADOS</h1>
                    <h2>Nombre Completo: </h2>
                    <p>{nombre} {apellido}</p>             
                    <h2>Genero: </h2>
                    <p>{genero}</p>
                    <h2>Dui: </h2>
                    <p>{dui}</p>
                    <h2>Fecha de Nacimiento: </h2>
                    <p>{fechaNacimiento}</p>
                    <h2>Nacionalidad: </h2>
                    <p>{nacionalidad}</p>
                    <h2>Direccion: </h2>
                    <p>{direccion}</p>
                    <h2>Municipio: </h2>
                    <p>{municipio}</p>
                    <h2>Departamento: </h2>
                    <p>{departamento}</p>

                </div>
            </>
        )
    }
    
}

export default Mostrarformulario