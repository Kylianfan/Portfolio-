import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaCertificate,
  FaCode,
  FaLanguage,
  FaDownload
} from "react-icons/fa";
// Le CV est dans le dossier public/assets

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href="/assets/CV_Adolphe_Gouba.pdf"
            target="_blank"
            style={{ 
              maxWidth: "250px",
              padding: "10px 20px",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(98, 54, 134, 0.3)",
              transition: "all 0.3s ease"
            }}
          >
            <FaDownload style={{ marginRight: "10px" }} />
            Télécharger mon CV
          </Button>
        </Row>
        <Container>
          <Row className="resume-section">
            <Col md={6} className="resume-left">
              <h3 className="resume-title">
                <FaGraduationCap /> Formation
              </h3>
              <div className="resume-item">
                <h5>EIGSI Casablanca — Maroc</h5>
                <p><em>Cycle Ingénieur généraliste, option Big Data et Intelligence Artificielle</em></p>
                <p>2023 – Présent</p>
                <ul>
                  <li>Machine Learning, Systèmes Distribués (Hadoop, HDFS, Hive)</li>
                  <li>DevOps (CI/CD, Docker), NLP</li>
                  <li>Python (Scikit-learn, TensorFlow, Pandas), Spark, SQL</li>
                </ul>
              </div>
              <div className="resume-item">
                <h5>2iE Ouagadougou — Burkina Faso</h5>
                <p><em>Classes Préparatoires aux Grandes Écoles (CPGE)</em></p>
                <p>2021 – 2023</p>
                <ul>
                  <li>Mathématiques, Physique, Informatique</li>
                </ul>
              </div>

              <h3 className="resume-title">
                <FaCertificate /> Certifications Oracle Cloud (2025)
              </h3>
              <div className="resume-item">
                <ul>
                  <li>Oracle Cloud Infrastructure AI Foundations</li>
                  <li>Oracle Cloud Infrastructure Data Science Professional</li>
                  <li>Oracle Cloud Infrastructure Generative AI Professional</li>
                </ul>
              </div>
            </Col>

            <Col md={6} className="resume-right">
              <h3 className="resume-title">
                <FaBriefcase /> Expérience Professionnelle
              </h3>
              <div className="resume-item">
                <h5>MAYADIGIT CONSULTING</h5>
                <p><em>Stage Data Analyst</em></p>
                <p>2024 – 2025 (3 mois)</p>
                <ul>
                  <li>Analyse des données internes du cabinet et de ses clients</li>
                  <li>Traitement et visualisation des données</li>
                  <li>Formateur en data analyse (présentiel et en ligne)</li>
                </ul>
              </div>
              <div className="resume-item">
                <h5>MOOV Africa Burkina Faso</h5>
                <p><em>Stage Technicien Fibre Optique</em></p>
                <p>1,5 mois</p>
                <ul>
                  <li>Installation et maintenance de la fibre optique</li>
                  <li>Analyse et exploitation des données terrain</li>
                  <li>Évaluation de la faisabilité du déploiement réseau</li>
                  <li>Suivi de KPI en direct et détection d'anomalies avec 92% de précision</li>
                </ul>
              </div>

              <h3 className="resume-title">
                <FaLanguage /> Langues
              </h3>
              <div className="resume-item">
                <ul>
                  <li>Français — Courant</li>
                  <li>Anglais — Professionnel</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
