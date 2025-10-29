import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ADOLPHE GOUBA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Retrouvez-moi sur</h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kylianfan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adolphe-gouba-96a352297/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/share/17LS2bcVon/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/goubaadolphe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/22657616272"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
