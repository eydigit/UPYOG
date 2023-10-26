import React from "react";
import { ReactComponent as VerifiedIcon } from '../images/verified.svg'
import { ReactComponent as ReceivedIcon } from '../images/received.svg'
import { ReactComponent as CancelIcon } from '../images/cancel.svg'
import { ReactComponent as ProgressIcon } from '../images/progress.svg'
import { ReactComponent as GoalIcon } from '../images/goal.svg'

import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const HeaderBody = () =>{

  return (
    <Container fluid>
        <div className="header-body">
            {/* Card stats */}
            <Row className="edss-row">
              <Col lg="6" xl="13">
                <Card className="card-stats mb-4 mb-xl-0 ecard ">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Received
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          1234
                        </span>
                      </div>
                      <Col className="col-auto">
                          <ReceivedIcon></ReceivedIcon>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="13">
                <Card className="card-stats mb-4 mb-xl-0 ecard" >
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Resolved
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">456</span>
                      </div>
                      <Col className="col-auto">
                          <VerifiedIcon></VerifiedIcon>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="13">
                <Card className="card-stats mb-4 mb-xl-0 ecard">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Work In Progress
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">498</span>
                      </div>
                      <Col className="col-auto">
                          <ProgressIcon></ProgressIcon>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="13">
                <Card className="card-stats mb-4 mb-xl-0 ecard">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Rejected
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">280</span>
                      </div>
                      <Col className="col-auto">
                        <CancelIcon></CancelIcon>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="13">
                <Card className="card-stats mb-4 mb-xl-0 ecard">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          SLA Achieved
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">120</span>
                      </div>
                      <Col className="col-auto">
                        <GoalIcon></GoalIcon>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          </Container>
  );
};

export default HeaderBody;