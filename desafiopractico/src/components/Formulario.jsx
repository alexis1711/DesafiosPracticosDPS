import React,{useState} from "react";
import {Row, Col, Form, Input, Label, FormGroup, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mostrarformulario from "./Mostrarformulario";

export default function Formulario(){  
    function Opciones({ name }) {
        return (
            <>
                <select name={name} className="form-control">
                    <option value="">Seleccione...</option>
                    <option value="1">Femenino</option>
                    <option value="2">Masculino</option>
                </select>
            </>
        )
    }

    const[paciente, setPaciente] = useState({
        nombre:null,
        apellido:null,
        sexo:null,
        dui:null,
        fechaNacimiento:null,
        nacionalidad:null,
        direccion:null,
        municipio:null,
        departamento:null
    })

    /*const validarLetra = (palabra) => {
        for(let i = 0; i <= palabra.length -1; i++){
            let letra = palabra[i]
            if(letra == 0 || letra == 1 || letra == 2 || letra == 3 || letra == 4 || letra == 5 || letra == 6 || letra == 7 || letra == 8 || letra == 9){
                alert('Campo ' + palabra + 'es invalido')
                return;
            }
        }
    }*/


    const handleSubmit = (event) => {
        event.preventDefault();
        // Variables naturales
        var opcion = event.target.elements.opcion.value;
        let nombre = event.target.elements.nombre.value;
        var apellido = event.target.elements.apellido.value;
        var dui = event.target.elements.dui.value;
        var fechaNacimiento = event.target.elements.fechaNacimiento.value;
        var nacionalidad = event.target.elements.nacionalidad.value;
        var direccion = event.target.elements.direccion.value;
        var municipio = event.target.elements.municipio.value;
        var departamento = event.target.elements.departamento.value;

        //Variables con Trim
        let nombreTrim = nombre.replace(/ /g, "");
        let apellidoTrim = apellido.replace(/ /g, "");
        let nacionalidadTrim = nacionalidad.replace(/ /g, "");
        let municipioTrim = municipio.replace(/ /g, "");
        let departamentoTrim = departamento.replace(/ /g, "");

        for(let i = 0; i < nombreTrim.length; i++){
            let letra = nombreTrim[i];
            if(letra==0||letra==1||letra==2||letra==3||letra==4||letra==5||letra== 6||letra==7||letra==8||letra==9){
                alert('Campo Nombres es invalido')
                return;
            }
        }

        for(let i = 0; i < apellidoTrim.length; i++){
            let letra = apellidoTrim[i];
            if(letra==0||letra==1||letra==2||letra==3||letra==4||letra==5||letra== 6||letra==7||letra==8||letra==9){
                alert('Campo Apellidos es invalido')
                return;
            }
        }

        for(let i = 0; i < nacionalidadTrim.length; i++){
            let letra = nacionalidadTrim[i];
            if(letra==0||letra==1||letra==2||letra==3||letra==4||letra==5||letra== 6||letra==7||letra==8||letra==9){
                alert('Campo Nacionalidad es invalido')
                return;
            }
        }

        for(let i = 0; i < municipioTrim.length; i++){
            let letra = municipioTrim[i];
            if(letra==0||letra==1||letra==2||letra==3||letra==4||letra==5||letra== 6||letra==7||letra==8||letra==9){
                alert('Campo Municipio es invalido')
                return;
            }
        }

        for(let i = 0; i < departamentoTrim.length; i++){
            let letra = departamentoTrim[i];
            if(letra==0||letra==1||letra==2||letra==3||letra==4||letra==5||letra== 6||letra==7||letra==8||letra==9){
                alert('Campo Departamento es invalido')
                return;
            }
        }

        if (opcion == ''){
            alert('Debes elegir una opción de sexo')
            return
        }
        if (nombre == '' || apellido == '' || dui == '' || fechaNacimiento == '' || nacionalidad == '' || direccion == '' || municipio == '' || departamento == ''){
            alert('Todos los campos deben estar llenos')
            return
        }
        
        
        var sexo = '';
        switch (opcion) {
            case '1':
                sexo = 'Femenino';
                break;
            case '2':
                sexo = 'Masculino';
                break;
        }
        setPaciente({nombre: nombre, apellido: apellido, dui:dui, fechaNacimiento: fechaNacimiento, nacionalidad: nacionalidad, direccion: direccion, municipio: municipio, departamento: departamento, sexo: sexo})
    }

    function renderElement() {
        return <Mostrarformulario nombre={paciente.nombre} apellido={paciente.apellido} genero={paciente.sexo} dui={paciente.dui} nacionalidad={paciente.nacionalidad} direccion={paciente.direccion} municipio={paciente.municipio} departamento={paciente.departamento} fechaNacimiento={paciente.fechaNacimiento}/>
    }

    return (
        <>
        <div>
            <Row>
                <Col xs="3"></Col>
                <Col xs="6">
                    <h2>Registro de Paciente</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Nombres: </Label>
                            <Input type="text" name="nombre"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Apellidos: </Label>
                            <Input type="text" name="apellido"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Seleccione sexo: </Label>
                            <Opciones name="opcion"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Dui (Sin guión): </Label>
                            <Input type="number" name="dui"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Fecha de nacimiento: </Label>
                            <Input type="datetime-local" name="fechaNacimiento" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Nacionalidad: </Label>
                            <Input type="text" name="nacionalidad"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Direccion: </Label>
                            <Input type="text" name="direccion"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Municipio: </Label>
                            <Input type="text" name="municipio"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Departamento: </Label>
                            <Input type="text" name="departamento"/>
                        </FormGroup>
                        <Button color="primary" type="submit">Ingresar Datos</Button>
                        {renderElement()}
                    </Form>
                </Col>
            </Row>
        </div>
        </>
    )

}