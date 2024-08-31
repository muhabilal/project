import React from "react";
import "./Navbar1.css";
import Container from "react-bootstrap/Container";
import { Link as ScrollLink } from 'react-scroll';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown  from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import {Row, Col} from 'react-bootstrap'
import { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faArrowDown} from '@fortawesome/free-solid-svg-icons';
function ServicesDropDown({ title, items }) {
    return (
      <div>
        {title && <h4 className="dropdown-title">{title}</h4>}
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item">
              <a href={item.href} className="dropdown-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
function Navbar1() {
  const [bgTransparent, setBgTransparent] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBgTransparent(false);
    } else {
      setBgTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const HistoryData={link: "/category/History" }

    const servicesData = [
        {
          title: "Business Solution",
          items: [
            { name: "Web and Enterprise Portals", href: "/category/Web" },
            { name: "Intranets", href: "/category/Intranets" },
            { name: "Enterprise Mobile Apps", href: "/category/Enterprise_Mobile" },
            { name: "Ecommerce", href: "/category/Ecommerce" },
            { name: "Elearning and Online Training", href: "/category/Elearning" },
          ],
        },
        {
          title: "",
          items: [
            { name: "Fleet Management", href: "/category/Fleet" },
            { name: "Media Content Distribution", href: "/category/Media" },
            { name: "Business Process Automation", href: "/category/Business_Process" },
            { name: "Business Intelligence", href: "/category/Business_Intelligence" },
            { name: "Software Security", href: "/category/Software_Security" },
          ],
        },
        {
          title: "Development Stack",
          items: [
            { name: "Salesforce", href: "/category/Salesforce" },
            { name: "SharePoint", href: "/category/Share_Point" },
            { name: "Artificial Intelligence", href: "/category/Artificial_Intelligence" },
            { name: "Computer Vision", href: "/category/Computer_Vision" },
            { name: "Augmented Reality", href: "/category/Augmented_Reality" },
            { name: "Mobile Platforms", href: "/category/Mobile_Platforms" },
          ],
        },
        {
          title: "",
          items: [
            { name: ".Net", href: "/category/Net" },
            { name: "Java", href: "/category/Java" },
            { name: "Python", href: "/category/Python" },
            { name: "Ruby on Rails", href: "/category/Ruby" },
            { name: "PHP", href: "/category/PHP" },
            { name: "Backend", href: "/category/Backend" },
          ],
        },
      ];
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <div>

<div className='mob-nav'>
        <Navbar className='nav-header'>
        <Container className='container'>
          <Navbar.Brand href="/" id='brand-link'>
          CONVAITE
          </Navbar.Brand>

          <div className='nav-right'>
          <Button variant='outline-light' onClick={handleShow} className='mob-nav-btn'>
        <FontAwesomeIcon icon={faBars} className='icon-mob'/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className='title-mob'>
          <Offcanvas.Title className='title-offcanvas'>
          <div className='mob-logo-div2'>
           {/* <img src={logo2} alt='MegaTech AI Solutions' className='real-logo'/> */}
           <h6 id="brand-link">CONVAITE</h6>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='offcanvas-body'>
            <div className='mob-nav-body'>
           
            <NavDropdown title="Company" id="link">
              <NavDropdown.Item href="#about-section" id="dropdown-item">About</NavDropdown.Item>
              <NavDropdown.Item href="/category/History" id="dropdown-item">History</NavDropdown.Item>
              <NavDropdown.Item href="/category/Methodology" id="dropdown-item">
                Methodology
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Business" id="dropdown-item">
                Business Continuity
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Quality" id="dropdown-item">
                Quality Management
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Security" id="dropdown-item">
                Security and IP Protection
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Engagement" id="dropdown-item">
                Engagement Models
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Experties" id="link" >
            <div className="dropdown-grid">
        {servicesData.map((service, idx) => (
          <div key={idx} className="dropdown-column">
          <h6 className="dropdown-header" style={{color:'#0101115', fontWeight:'bold'}}>{service.title}</h6>
            {service.items.map((item, subIdx) => (
              <NavDropdown.Item key={subIdx} href={item.href}>
                {item.name}
              </NavDropdown.Item>
            ))}
          </div>
        ))}
      </div>

    </NavDropdown>
    
            <NavDropdown title="Services" id="link">
              <NavDropdown.Item href="/category/Enterprise" id="dropdown-item">
                Enterprise Software Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/WebApp" id="dropdown-item">
                Web App Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/MobileApp" id="dropdown-item">
                Mobile App Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/AppIntegration" id="dropdown-item">
                Application Integration
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/QATesting" id="dropdown-item">
                QA and Testing
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Team" id="dropdown-item">
                Dedicated Development Teams
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#portfolio-section" id="link">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#footer" id="link">
              Contact
            </Nav.Link>

            </div>
           
        </Offcanvas.Body>
      </Offcanvas>


          </div>
          </Container>

          </Navbar>



      
        </div>
<div className="lg-screen-nav">
      <Navbar className="main-nav fixed-top" style={{
          backgroundColor: bgTransparent ? 'transparent' : '#010115',
          transition: 'background-color 0.5s'
        }}>
        <Container className="inner-con-nav">
          <Navbar.Brand href="/" id="brand-link">
            CONVAITE
          </Navbar.Brand>
          <Nav className="my-auto" id="links-nav">
            <NavDropdown title="Company" id="link">
            <NavDropdown.Item id="dropdown-item">
                <ScrollLink to="about-section" smooth={true} duration={500} className="abt-link-scroll">About</ScrollLink>
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={HistoryData.link} id="dropdown-item">History</NavDropdown.Item>
              <NavDropdown.Item href="/category/Methodology" id="dropdown-item">
                Methodology
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Business" id="dropdown-item">
                Business Continuity
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Quality" id="dropdown-item">
                Quality Management
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Security" id="dropdown-item">
                Security and IP Protection
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Engagement" id="dropdown-item">
                Engagement Models
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Experties" id="link" >
      {/* <div className="dropdown-grid">
        {servicesData.map((service, idx) => (
          <div key={idx} className="dropdown-column">
          <h6 className="dropdown-header">{service.title}</h6>
            {service.items.map((item, subIdx) => (
              <NavDropdown.Item key={subIdx} href={item.href}>
                {item.name}
              </NavDropdown.Item>
            ))}
          </div>
        ))}
      </div> */}
      <div className="dropdown-container">
      {servicesData.map((service, index) => (
        <ServicesDropDown key={index} title={service.title} items={service.items} />
      ))}
    </div>
    </NavDropdown>
            <NavDropdown title="Services" id="link">
              <NavDropdown.Item href="/category/Enterprise" id="dropdown-item">
                Enterprise Software Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/WebApp" id="dropdown-item">
                Web App Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/MobileApp" id="dropdown-item">
                Mobile App Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/AppIntegration" id="dropdown-item">
                Application Integration
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/QATesting" id="dropdown-item">
                QA and Testing
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Team" id="dropdown-item">
                Dedicated Development Teams
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#portfolio-section" id="link">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#footer" id="link">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  );
}

export default Navbar1;
