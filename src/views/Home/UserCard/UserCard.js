import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const UserCard = (props) => {
  return (
    <div>
      <Card style={{marginTop:'15px'}}>
        <CardImg top width="100%" height="350px" style={{objectFit:'cover'}} src={props.foto} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <span className="badge badge-primary">
              {props.tipo}
            </span>
            
          </CardTitle>
            <CardSubtitle>{props.nombre}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;