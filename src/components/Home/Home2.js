import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE QUE EU <span className="purple">APRESENTE</span> MEU PERFIL
            </h1>
            <p className="home-about-body">
              Sou <b className="purple">Ui-sam  dos Santos</b>, desenvolvedor sênior com experiência em Angular, React, .NET, Django, Docker, SQL Server, Oracle, APIs REST e WebSocket.
              <br />
              <br />Atualmente trabalho na <b className="purple">Hapvida NotreDame</b> (remoto), atuando em projetos de autenticação SSO, integração biométrica, soluções para enfermagem, SCRUM (Azure) e uso avançado de GIT.
              <br />
              <br />Tenho passagens por Stefanini, Nota Control e G2I, sempre focado em desenvolvimento web, banco de dados e arquitetura sustentável.
              <br />
              <br />Sou apaixonado por tecnologia, comunicação, autonomia e resolução de problemas.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
              Sinta-se à vontade para <span className="purple">conectar-se </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/uisam00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/uisam00/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
