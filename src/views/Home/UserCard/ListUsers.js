import React from 'react'
import UserCard from './UserCard'
import {
    Row,Col
} from 'reactstrap'
const ListUsers =(props)=>{

    return(
        <Row>
            {props.data.map(student=>
                <Col md="3">
                    <UserCard nombre={student.nombre} tipo='Estudiante' foto={student.foto}/>
                </Col>
            )}
        </Row>
    )
}
export default ListUsers;