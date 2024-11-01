import React from "react";
import { Container,Row,Col,Breadcrumb } from "react-bootstrap";
import "./pageHeader.css"

const PageHeader=({title})=>{
    return (
        <div className="page-header">
            <Container fluid className="page-content">
                <Row className="text-center">
                    <Col>
                    <h1 className="page-title">{title}</h1>
                    <Breadcrumb className="page-background">
                        <Breadcrumb.Item href="/" className="home-color">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active className="title-color">{title}</Breadcrumb.Item>
                    </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default PageHeader;