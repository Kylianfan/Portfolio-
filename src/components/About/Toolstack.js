import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiJupyter,
  SiAnaconda,
  SiPowerbi,
  SiTableau,
  SiDocker,
  SiGit
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Anaconda</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Tableau</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
