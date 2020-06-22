import React, { Component } from 'react';
import {
    Row,
    Col
}from 'reactstrap'
export default class Sillabus extends Component {
    constructor(props){
        super(props);        
    }

     renderUnidad = (unidad) => {
         console.log("Renderizando unidad: ",unidad);         
        return(
            <table className="table table-bordered">
            <thead>
                <th className="center" colspan="12">{unidad.titulo}</th>
            </thead>

            <thead>
                <th className="center">Semana</th>
                <th className="center">Contenidos</th>
                <th className="center">Clases</th>
                <th className="center">Tarea</th>
            </thead>
            {unidad.semanas!=null?unidad.semanas.map(semana=>{this.renderSemana(semana)}):null}
            </table>
        );
    }

    Contenidos = (contenidos) => {
       const mdata=  contenidos.map((contenido) => <li>{contenido.titulo}</li>)
       return mdata;

    }

    

     Semanas = (semanas) => {
        const mdata = semanas.map(semana=>
            <tr>
                <td className="center">{semana.numero}</td>
                <td className="themeContainer">
                    <div>
                        <a href={semana.archivoExterno!=null?semana.archivoExterno.url:'#'} download={semana.archivoExterno!=null?semana.archivoExterno.nombre:'#'}>
                            <h5>{semana.titulo}</h5>
                        </a>
                        <ul>                         
                            {semana.contenidos!=null?this.Contenidos(semana.contenidos):null}
                        </ul>
                    </div>
                </td>                
                <ColFile archivo={semana.archivoClase}/>
                <ColFile archivo={semana.archivoTarea}/>
                <ColFile archivo={semana.archivoLaboratorio}/>
                
            </tr>
        )
         return mdata;
     }
     
 
     Unidades = () => {        
        const mdata = this.props.data.unidades.map((unidad)=>
            <table className="table table-bordered">
            <thead>
                <th className="center" colspan="12">{unidad.titulo}</th>
            </thead>

            <thead>
                <th className="text-center">Semana</th>
                <th className="center">Contenidos</th>
                <th className="center">Clases</th>
                <th className="center">Tarea</th>
                <th className="center">Laboratorio</th>
            </thead>
            {this.Semanas(unidad.semanas)}
            </table>
        ); 

        return (
            <div>{mdata}</div>
        );
    }

    render() {
   
        return (
            <div id="containerSillabus">
                <Row>
                     <Col md="12">                    
                        {this.Unidades()}
                    </Col>
                </Row>
            </div>
        )
    }
}


const ColFile=(props)=>{
    
    if(!props.archivo) return <td className="text-center"></td>
    else{
        const {nombre,url,tipo,titulo} = props.archivo
        return(
            <td className="text-center">
                <Row>
                    <Col md="12" className="text-center">
                        <a href={url} download={nombre}>{getText(tipo)}</a>      
                    </Col>
                    <Col md="12">
                        <span className="downloadText">{titulo}</span>
                    </Col>

                </Row>                                
            </td>
        )    
    }
        
    
}

const getText = (tipo) => {
    switch(tipo){
        case 'pptx' : return <i className="fa fa-download fa-2x"></i>;
        case 'word' : return <i className="fa fa-download fa-2x"></i>;
        
    }
}