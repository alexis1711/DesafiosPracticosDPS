import React, { useState } from "react";
import { Row, Col, Form, Input, Label, FormGroup, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MostrarConversion from "./MostrarConversion";

export default function Convertidor() {
    function Opciones({ name }) {
        return (
            <>
                <select name={name} className="form-control">
                    <option value="">Seleccione...</option>
                    <option value="1">Libras a Onzas</option>
                    <option value="2">Libras a Kilogramos</option>
                    <option value="3">Libras a Gramos</option>
                </select>
            </>
        )
    }
    const [datos, setDatos] = useState({
        libras: null,
        opcion: null,
        conversion: null,
        unidad: null
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        var opcion = event.target.elements.opcion.value;
        var libras = event.target.elements.libras.value;
        if (opcion == ''){
            alert('Debes elegir una opción de conversión')
            return
        }
        if (parseInt(libras).toString() == 'NaN'){
            alert('Debes ingresar solamente números')
            return
        }
        var unidades = '';
        var factor = 1;
        switch (opcion) {
            case '1':
                unidades = 'Onzas'
                factor = 16;
                break;
            case '2':
                unidades = 'Kilogramos'
                factor = 1 / (2.205);
                break;
            case '3':
                unidades = 'Gramos'
                factor = 1000 / (2.205);
                break;
        }
        var conversion = parseFloat((libras * factor).toFixed(2));
        setDatos({ libras: libras, conversion: conversion, unidad: unidades, opcion: opcion })
    }

    function renderElement() {
        if (datos.libras != null && datos.conversion != null && datos.unidad != null)
            return <MostrarConversion libras={datos.libras} conversion={datos.conversion} unidad={datos.unidad} />
        return null
    }

    return (
        <>
            <Row>
                <Col xs="3"></Col>
                <Col xs="6">
                    <h2>Conversión de unidades</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Seleccione Opcion: </Label>
                            <Opciones name="opcion" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Libras a convertir: </Label>
                            <Input type="number" min={0} step={.01} name="libras" />
                        </FormGroup>
                        <Button color="primary" type="submit">Convertir</Button>
                        {renderElement()}
                    </Form>
                </Col>
            </Row>
        </>
    )
}