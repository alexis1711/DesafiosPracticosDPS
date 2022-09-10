import React,{useState} from "react";
import {Row, Col, Form, Input, Label, FormGroup, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mostrarformulario from "./Mostrarformulario";

export default function Formulario(){
    const[paciente, setPaciente] = useState({
        nombre:'',
        apellido:'',
        sexo:'',
        dui:'',
        fechaNacimiento:'',
        nacionalidad:'',
        direccion:'',
        municipio:'',
        departamento:''
    })
    const[pacientes, setPacientes] = useState([
        
    ])
    
    const handleChange = e => {
        console.log(e.target.value)
        setPaciente({...paciente,[e.target.name]: e.target.value})
    }

    const handleClick = e => {
        /*if(Object.keys(todo.inp1).length === 0 || todo.inp1.trim() === '' || Object.keys(todo.inp2).length === 0 || todo.inp2.trim() === ''){
            alert('el campo no puede estar vacio')
            return
        }
        /*if(Object.keys(todo1).length === 0 || todo1.todo1.trim() === ''){
            alert('el campo no puede estar vacio')
            return
        }*/
        setPacientes([...pacientes, paciente]);
    }
    return (
        <>
        <div>
            <Row>
                <Col xs="3"></Col>
                <Col xs="6">
                    <h2>Registro de Paciente</h2>
                    <Form>
                        <FormGroup>
                            <Label>Nombres: </Label>
                            <Input type="text" name="nombre" value={paciente.nombre} onChange={handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Apellidos: </Label>
                            <Input type="text" name="apellido" value={paciente.apellido} onChange={handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Seleccione sexo: </Label>
                            <select>
                                <option value="Femenino">Femenino</option>
                                <option value="Masculino">Masculino</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label>Dui: </Label>
                            <Input type="text" name="dui" value={paciente.dui} onChange={handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Fecha de nacimiento: </Label>
                            <Input type="datetime-local" name="nombre" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Nacionalidad: </Label>
                            <Input type="text" name="nacionalidad" value={paciente.nacionalidad} onChange={handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Direccion: </Label>
                            <Input type="text" name="direccion" value={paciente.direccion} onChange={handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Municipio: </Label>
                            <Input type="text" name="municipio" value={paciente.municipio} onChange={handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Departamento: </Label>
                            <Input type="text" name="departamento" value={paciente.departamento} onChange={handleChange}/>
                        </FormGroup>
                        <Button color="primary" onClick={handleClick}>Ingresar Datos</Button>
                    </Form>
                </Col>
            </Row>
        </div>

        {
            /*todos.map((value, index) => (<h3>{value.inp1} - {value.inp2}</h3>))*/


    
            pacientes.map((value, index) => (
                <Mostrarformulario nombre={value.nombre} apellido={value.apellido} dui={value.dui} nacionalidad={value.nacionalidad} direccion={value.direccion} municipio={value.municipio} departamento={value.departamento}/>
            ))
    
        }
        </>
    )

}