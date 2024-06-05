import React from 'react';
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';
import './index.css';
import Image1 from '../../../assets/login-logo.gif';
import Image2 from '../../../assets/regis.gif';
const DashboardPage = () => {
    return (
        <Container fluid className="p-0">
            <Container fluid className="text-center mt-5 mb-0">
                <Container>
                    <h1>Welcome to the Society Management System</h1>
                    <p>Efficient management for a better society</p>
                </Container>
            </Container>
            <hr />
            <Container className="content py-5">
                <Row className="justify-content-center mb-4" style={{ height: '200px' }}>
                    <Col md={4} className="text-center">
                        <Image src={Image1} rounded style={{ height: '180px', width: '230px' }} />
                    </Col>
                    <Col md={4} className="text-center">
                        <Image src={Image2} rounded fluid />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2 className="text-primary">About Our Project</h2>
                        <p>
                            Our Society Management System is designed to streamline the
                            management of residential societies. It provides tools for
                            managing residents, maintenance, finances, and more.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default DashboardPage
