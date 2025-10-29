import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiApachespark,
  SiApachehadoop,
  SiMysql,
  SiPowerbi,
  SiDocker,
  SiGit,
  SiJupyter
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Python</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPandas style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Pandas</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">NumPy</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Apache Spark</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Hadoop</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">NoSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Power BI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaJava style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter style={{ fontSize: "3.5em" }} />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
    </Row>
  );
}

export default Techstack;
