import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Plateforme d'Optimisation d'Entrepôts par IA"
              description="Développement d'une solution de simulation intelligente pour optimiser l'aménagement et la gestion des flux dans les entrepôts. Utilisation d'agents IA pour la logistique, permettant une réduction de 15% des distances de picking et une génération 3× plus rapide."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Système de Monitoring pour Raffinerie Pétrolière"
              description="Création d'une architecture temps réel pour la surveillance de la température via capteurs. Intégration d'un dashboard Power BI et d'un système d'alerte automatique, atteignant une précision de détection d'anomalies de 92%."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="RIIBO - Lutte contre le Gaspillage Alimentaire"
              description="Développement d'une plateforme web de gestion et redistribution alimentaire avec intégration d'un modèle YOLOv8 pour la détection des anomalies des produits. Réduction de 30% du gaspillage et amélioration de 40% de l'accès équitable à l'alimentation."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Système de Gestion Intelligente pour Maison Connectée"
              description="Conception d'un système temps réel basé sur ESP32 et FreeRTOS pour la gestion automatique de plusieurs appareils selon les priorités. Optimisation de l'usage énergétique et automatisation des tâches domestiques."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
