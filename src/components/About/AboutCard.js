import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá! Eu sou <span className="purple">Uisam dos Santos</span>,
            desenvolvedor sênior apaixonado por tecnologia e soluções
            inovadoras.
            <br />
            <br />
            Atuo atualmente como Desenvolvedor Full Stack na Hapvida NotreDame
            (remoto), com experiência em Angular, React, .NET, Django, Docker,
            SQL Server, Oracle, APIs REST e WebSocket.
            <br />
            <br />
            Tenho vivência em autenticação SSO, integração biométrica, soluções
            para área de enfermagem, padrões de projeto, SCRUM (Azure) e uso
            avançado de GIT.
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Comunicação e trabalho em equipe
            </li>
            <li className="about-activity">
              <ImPointRight /> Resolução de problemas e autonomia
            </li>
            <li className="about-activity">
              <ImPointRight /> Desenvolvimento web e banco de dados
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Trabalhar com honestidade é uma forma de servir aos outros. Faça sempre o seu melhor."
          </p>
          <footer className="blockquote-footer">Ui-sam dos Santos</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
