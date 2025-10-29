import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis un passionné d'Intelligence Artificielle et de Big Data, 
              transformant les données en solutions innovantes qui façonnent l'avenir. 
              Certifié Oracle Cloud en IA, je combine expertise technique et vision stratégique.
              <br />
              <br />
              Je maîtrise les technologies de pointe en{" "}
              <i>
                <b className="purple">
                  Data Science, Machine Learning, et Analyse de Données
                </b>
              </i>
              , avec une expertise particulière en{" "}
              <i>
                <b className="purple">
                  Python, TensorFlow, et Systèmes Distribués
                </b>
              </i>
              .
              <br />
              <br />
              Mon parcours unique combine{" "}
              <i>
                <b className="purple">
                  théorie et pratique
                </b>
              </i>
              , de la conception d'algorithmes complexes à leur déploiement en production. 
              J'ai notamment développé des solutions qui ont permis une{" "}
              <b className="purple">réduction de 15% des coûts logistiques</b> et une{" "}
              <b className="purple">détection d'anomalies avec 92% de précision</b>.
              <br />
              <br />
              Ma vision ? Utiliser l'IA pour{" "}
              <i>
                <b className="purple">
                  résoudre des défis concrets
                </b>
              </i>
              , qu'il s'agisse d'optimiser des processus industriels, de lutter contre le 
              gaspillage alimentaire ou d'améliorer l'efficacité énergétique. Je suis 
              constamment à la recherche de nouveaux défis où l'IA peut faire la différence.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{
                  borderRadius: "50%",
                  border: "2px solid #623686",
                  maxWidth: "300px",
                  boxShadow: "0 0 20px rgba(98, 54, 134, 0.5)"
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
