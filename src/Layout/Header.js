import React, { useState } from 'react';
import {
   Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink ,
   UncontrolledCarousel

} from 'reactstrap';


const items = [
  
  {
    src: 'https://img2.rtve.es/i/?w=1600&i=1492190597842.jpg',
    altText: 'Inteligencia artificial',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: 'https://peru.travel/Contenido/AcercaDePeru/Imagen/es/1/0.0/Principal/Machu%20Picchu.jpg',
    altText: 'Machupicchu',
    caption: '',
    header: '',
    key: '2'
  },
  
];

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (    
    <>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Inteligencia Artificial 2020</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">Sillabus</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Alumnos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>    
      <UncontrolledCarousel items={items}/>
    </>
  );
}

export default Header;