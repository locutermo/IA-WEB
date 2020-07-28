import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardHeader,
} from 'reactstrap'
import file from '../../../assets/files/silabo.docx'
import UserCard from '../UserCard/UserCard'
export default class Introduction extends Component {
  render() {
    return (
    <Row>
        <Col md="8">                        
            <ul className="list-group">

              <li className="list-group-item">
              <div className="text-center">
                
                  <h4>UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS</h4>
                  <h6>(Universidad del Perú, Decana de América)</h6>

                  <h6>FACULTAD DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</h6>

                  <div className="centerContainer logoContainer">
                  <img width="15%" height="15%" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/UNMSM_coatofarms_seal.svg" id="unmsmLogo" alt="..."></img>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="text-center">
                  <h4 className="paddingRight">Silabo </h4>
                  <a href={file} download="silabo.docx"><i className="fa fa-download"></i></a>
                </div>
              </li>

              <li className="list-group-item">
                <div>
                  <h5>INFORMACIÓN GENERAL</h5>
                  <div className="row">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Nombre y código de la asignatura: </td><td>Inteligencia Artificial - 2010605</td>
                        </tr>
                        <tr>
                          <td>Número de créditos: </td><td>03 créditos</td>
                        </tr>
                        <tr>
                          <td>Número de horas semanales: </td><td>04 horas (2 T, 2P)</td>
                        </tr>
                        <tr>
                          <td>Ciclo de estudio: </td><td>6</td>
                        </tr>
                        <tr>
                          <td>Periodo Académico: </td><td>2020 I</td>
                        </tr>
                        <tr>
                          <td>Prerrequisitos: </td><td>Algorítmica III - 2010505</td>
                        </tr>
                        <tr>
                          <td>Profesores: </td>
                          <td>
                            <div>
                              <ul className="teachers">
                                <li>Dr. Hugo Vega Huerta (Coordinador) - hvegah@unmsm.edu.pe</li>
                                <li>Mg. Rolando Maguiña Pérez - rmaguinap@unmsm.edu.pe</li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <h5>SUMILLA</h5>
                <blockquote>
                  La Inteligencia Artificial, conceptos y aplicaciones en la industria y servicios. Representación del conocimiento. Representación de problemas de IA como búsqueda en el espacio de estado. Métodos ciegos y con información adicional. Sistemas Expertos: conceptos, aplicaciones y arquitectura. Métodos de encadenamiento. Redes Neuronales artificiales basados en el conocimiento y sus aplicaciones. Introducción a los sistemas inteligentes.
                </blockquote>
              </li>


              <li className="list-group-item">
                <h5>COMPETENCIAS GENERALES</h5>
                <div className="row">
                  <ul className="listsObjective">
                    <li><span className="spanObjective">Conocimientos de Computación</span></li>
                    <li><span className="spanObjective">Análisis de Problemas</span></li>
                    <li><span className="spanObjective">Diseño y desarrollo de soluciones</span></li>
                    <li><span className="spanObjective">Trabajo Individual y en Equipo</span> </li>
                    <li><span className="spanObjective">Comunicación</span></li>
                    <li><span className="spanObjective">Uso de herramientas modernas</span></li>
                    <li><span className="spanObjective">Sistemas de información</span></li>
                  </ul>
                </div>
              </li>            
            </ul>                        
        </Col>
        <Col md="4">
            <UserCard 
              foto="http://2.bp.blogspot.com/-SdfS5UYcQvk/VwQUxMgPf-I/AAAAAAAAAGc/quwQGtwZsHMr63gyg3fCaFoJ2XPhsfS4w/s302/ia%2Bprofe.bmp"
              nombre="Hugo Vega Huerta"
              tipo="Docente"
            />
            <GroupWeb/>
        </Col>
    </Row>
    )
  }
}

function GroupWeb(props){

  return(
    <Card style={{marginTop:'30px'}}>
      <CardHeader>Página de grupos</CardHeader>
      <CardBody>
        <ul className="listsObjective">
          <li><a target="_blank" href="https://inteligencia-artifical.herokuapp.com/">Grupo 1</a></li>
          <li><a target="_blank" href="https://inteliartificial20.wixsite.com/inteliartificial">Grupo 2</a></li>
          <li><a target="_blank" href="https://inteligenciaaartificialg320201.wordpress.com/">Grupo 3</a></li>
          <li><a target="_blank" href="https://paulchipana3.wixsite.com/iagrupo4-2020">Grupo 4</a></li>
          <li><a target="_blank" href="https://ia-2020-web.web.app/">Grupo 5</a></li>
        </ul>
      </CardBody>
    </Card>  
)
}